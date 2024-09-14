
const plugin = {
  meta: {
    name: "packageDeprecationsPlugin",
    version: "1.0.0"
  },
  rules: {
    "no-atom.config.unobserve": require("./rules/no-atom.config.unobserve.js"),
    "no-require-view": require("./rules/no-require-view.js"),
    "no-require-editorView": require("./rules/no-require-editorView.js"),
    "no-require-scrollView": require("./rules/no-require-scrollView.js"),
    "no-require-selectListView": require("./rules/no-require-selectListView.js"),
    "no-require-textEditorView": require("./rules/no-require-textEditorView.js"),
    "no-require-dollarSign": require("./rules/no-require-dollarSign.js"),
    "no-require-doubleDollarSign": require("./rules/no-require-doubleDollarSign.js"),
    "no-require-tripleDollarSign": require("./rules/no-require-tripleDollarSign.js"),
    "no-atom.services": require("./rules/no-atom.services.js"),
    "no-atom.workspaceView": require("./rules/no-atom.workspaceView.js"),
    "no-atom.syntax": require("./rules/no-atom.syntax.js"),
    "no-atom.registerRepresentationClass": require("./rules/no-atom.registerRepresentationClass.js"),
    "no-atom.registerRepresentationClasses": require("./rules/no-atom.registerRepresentationClasses.js"),
    "rename-atom.workspace-changeFocus": require("./rules/rename-atom.workspace-changeFocus.js"),
  }
};

module.exports = plugin;
