const fs = require("fs");
const path = require("node:path");
const findJsonFiles = require("./findJsonFiles.js");

module.exports =
function run(transformerPath, itemPaths) {

  let errors = 0;
  let responses = [];
  const mod = require(transformerPath);

  for (let i = 0; i < itemPaths.length; i++) {
    const jsonFiles = findJsonFiles(itemPaths[i]);

    for (let y = 0; y < jsonFiles.length; y++) {
      const file = JSON.parse(fs.readFileSync(jsonFiles[y], { encoding: "utf8" }));
      const fileName = path.parse(jsonFiles[y]).base;

      try {
        const res = mod(fileName, file);
        responses.push(`'${transformerPath}' transformed '${jsonFiles[y]}' without issue`);
        // TODO
        // What do we do with this? Lets follow suit with dirshift, and only care about errors
      } catch(err) {
        responses.push(err.toString());
        errors++;
      }
    }
  }

  return {
    responses: responses,
    error: errors
  };
}
