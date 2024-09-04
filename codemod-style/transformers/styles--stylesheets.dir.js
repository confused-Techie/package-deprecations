/*
  Store package style sheets in the `styles/` directory instead of `stylesheets/` in a package.
*/
const hasTldDir = require("../helpers/hasTldDir.js");

module.exports =
function transform(dirObj) {
  const hasStylesDir = hasTldDir(dirObj, "styles");
  const hasStylesheetsDir = hasTldDir(dirObj, "stylesheets");

  if (hasStylesheetsDir && !hasStylesDir) {
    // TODO: dirshift calls for errors to be thrown when items don't match,
    // instead of fixing them within the object
    throw "Store package style sheets in the `styles/` directory instead of `stylesheets/` in a package.";
  }
  return;
}
