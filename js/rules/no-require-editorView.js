const utils = require("../utils.js");

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow requiring `EditorView` from `atom` module."
    },
    messages: {
      default: "Requiring `EditorView` from `atom` is no longer supported. Please require `TextEditorView` from `atom-space-pen-view` instead."
    }
  },
  test: {
    valid: [{
      code: "const { TextEditorView } = require('atom-space-pen-views');"
    }],
    invalid: [{
      code: "const { EditorView } = require('atom');",
      errors: [{ messageId: "default" }]
    }]
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        let isAtomModule = utils.variableDeclarator_requireModule(node, "atom");
        let doesRequireEditorView = utils.variableDeclarator_objectAssign(node, "EditorView");

        if (isAtomModule && doesRequireEditorView) {
          context.report({
            node,
            messageId: "default"
          });
        }

      }
    };
  }
};
