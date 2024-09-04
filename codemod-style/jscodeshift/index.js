const { run: jscodeshift } = require("jscodeshift/src/Runner");

module.exports =
async function run(transformPath, paths, options) {
  let errors = 0;
  let responses = [];

  for (let i = 0; i < paths.length; i++) {
    try {
      const res = await jscodeshift(transformPath, paths, options);
      // TODO
      // Just care about errors?
      console.log(res);
    } catch(err) {
      responses.push(err);
      errors++;
    }
  }

  return {
    error: errors,
    responses: responses
  };
}
