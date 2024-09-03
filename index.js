const path = require("node:path");
const fs = require("fs");
const { run: jscodeshift } = require("jscodeshift/src/Runner");
const dirshift = require("./dirshift/index.js");
const jsonshift = require("./jsonshift/index.js");

// Handle Arguments
const args = process.argv.slice(2);
const params = {
  dev: false,
  dry: false,
  print: false,
  verbose: 0,
  paths: []
};

for (let i = 0; i < args.length; i++) {
  if (args[i] === "--dry") {
    params.dry = true;
  }
  if (args[i] === "--print") {
    params.print = true;
  }
  if (args[i]?.startsWith("--verbose=")) {
    params.verbose = args[i].split("=")[1];
  }
  if (args[i]?.startsWith("--paths=")) {
    params.paths = args[i].split("=")[1].split(",");
  }
}

// Setup Transformations
const transformersPath = "./transformers";
const paths = params.paths;
const options = {
  dry: params.dry,
  print: params.print,
  verbose: params.verbose
};

function findTransformerType(tPath) {
  let tPathBase = path.parse(tPath).base;
  let tArr = tPathBase.split(".");
  return tArr[tArr.length-2];
}

// Execute Transformations
(async () => {

  // Execute Code Transformations
  const transformers = fs.readdirSync(transformersPath);
  let failedTransforms = [];

  for (const transformer of transformers) {
    const transformPath = path.resolve(path.join(transformersPath, transformer));
    const transformType = findTransformerType(transformer);
    console.log(`Running '${transformType}'-transformer: ${transformer}`);

    let res;

    if (transformType === "jscode") {
      res = await jscodeshift(transformPath, paths, options);
    } else if (transformType === "dir") {
      res = await dirshift(transformPath, paths);
    } else if (transformType === "json") {
      res = await jsonshift(transformPath, paths);
    }

    if (res.error > 0) {
      failedTransforms.push({
        transformer: transformer,
        result: res
      });
    }
  }

  if (failedTransforms.length > 0) {
    for (let i = 0; i < failedTransforms.length; i++) {
      console.log('\x1b[31m%s\x1b[0m', `Failed transform: ${failedTransforms[i].transformer}`);
      console.log('\x1b[31m%s\x1b[0m', JSON.stringify(failedTransforms[i].result));
    }
    process.exit(1);
  } else {
    process.exit(0);
  }

})();
