const utils = require("../utils.js");

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow requiring `TextEditorView` from `atom` module."
    },
    messages: {
      default: "Requiring `TextEditorView` from `atom` is no longer supported. Please require `TextEditorView` from `atom-space-pen-views` instead."
    }
  },
  test: {
    valid: [{
      code: "const { TextEditorView } = require('atom-space-pen-views');"
    }],
    invalid: [{
      code: "const { TextEditorView } = require('atom');",
      errors: [{ messageId: "default" }]
    }]
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        let isAtomModule = utils.variableDeclarator_requireModule(node, "atom");
        let doesRequireTextEditorView = utils.variableDeclarator_objectAssign(node, "TextEditorView");

        if (isAtomModule && doesRequireTextEditorView) {
          context.report({
            node,
            messageId: "default"
          });
        }

      }
    };
  }
};
