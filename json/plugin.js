
const plugin = {
  meta: {
    name: "json",
    version: "1.0.0"
  },
  rules: {
    "no-activationEvents": require("./rules/no-activationEvents.js")
  }
};

module.exports = plugin;
