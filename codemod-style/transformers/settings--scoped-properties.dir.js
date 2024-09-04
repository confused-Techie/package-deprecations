/*
  Store package settings files in the `settings/` directory instead of `scoped-properties/`
*/
const hasTldDir = require("../helpers/hasTldDir.js");

module.exports =
function transform(dirObj) {
  const hasSettingsDir = hasTldDir(dirObj, "settings");
  const hasScopedPropertiesDir = hasTldDir(dirObj, "scoped-properties");

  if (hasScopedPropertiesDir && !hasSettingsDir) {
    // TODO: dirshift calls for errors to be thrown when items don't match,
    // instead of fixing them within the object
    throw "Store package settings files in the `settings/` directory instead of `scoped-properties/`";
  }
  return;
}
