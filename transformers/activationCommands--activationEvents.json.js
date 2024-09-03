/*
  Use `activationCommands` instead of `activationEvents` in your package.json
*/

module.exports =
function transform(name, contents) {
  if (name !== "package.json") {
    return;
  }

  if (contents?.activationEvents) {
    throw "Use `activationCommands` instead of `activationEvents` in your package.json";
  }

  return;
}
