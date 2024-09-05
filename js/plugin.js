
const plugin = {
  meta: {
    name: "packageDeprecationsPlugin",
    version: "1.0.0"
  },
  rules: {
    "no-atom.config.unobserve": require("./rules/no-atom.config.unobserve.js"),
    "no-require-view": require("./rules/no-require-view.js"),
    "no-require-editorView": require("./rules/no-require-editorView.js"),
    "no-require-dollarSign": require("./rules/no-require-dollarSign.js"),
    "no-require-doubleDollarSign": require("./rules/no-require-doubleDollarSign.js"),
    "no-require-tripleDollarSign": require("./rules/no-require-tripleDollarSign.js"),
  }
};

module.exports = plugin;
