const utils = require("../utils.js");

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow requiring `TextEditorView` from `atom` module."
    }
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        let isAtomModule = utils.variableDeclarator_requireModule(node, "atom");
        let doesRequireTextEditorView = utils.variableDeclarator_objectAssign(node, "TextEditorView");

        if (isAtomModule && doesRequireTextEditorView) {
          context.report({
            node,
            message: "Requiring `TextEditorView` from `atom` is no longer supported. Please require `TextEditorView` from `atom-space-pen-view` instead."
          });
        }

      }
    };
  }
};
