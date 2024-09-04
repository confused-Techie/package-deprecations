const createObjectFromPath = require("./createObjectFromPath.js");

module.exports =
function run(transformerPath, itemPaths) {

  let errors = 0;
  let responses = [];
  const mod = require(transformerPath);

  for (let i = 0; i < itemPaths.length; i++) {
    const dirObject = createObjectFromPath(itemPaths[i]);

    try {
      const res = mod(dirObject);

      // TODO what do we do with the result? Check equality?
      // Maybe for now we just throw an error in the transformer
      responses.push(`'${transformerPath}' transformed '${itemPaths[i]}' without issue`);

      // TODO
      // In the future, to have this function like jscodeshift, it'd make sense
      // if we could check a difference in the real dir object, and what we
      // supplied to each transform. Maybe even acting on it, then we would be
      // just like jscodeshift, and have something for directory structure
      // For now... eh
    } catch(err) {
      responses.push(err.toString());
      errors++;
    }

  }

  return {
    responses: responses,
    error: errors
  };
}
