const utils = require("../utils.js");

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow requiring `View` from `atom` module."
    },
    messages: {
      default: "Requiring `View` from `atom` is no longer supported. Please require `atom-space-pen-views` instead: `{View} = require 'atom-space-pen-views'`"
    }
  },
  test: {
    valid: [{
      code: "const { View } = require('atom-space-pen-views');"
    }],
    invalid: [{
      code: "const { View } = require('atom');",
      errors: [{ messageId: "default" }]
    }]
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        let isAtomModule = utils.variableDeclarator_requireModule(node, "atom");
        let doesRequireView = utils.variableDeclarator_objectAssign(node, "View");

        if (isAtomModule && doesRequireView) {
          context.report({
            node,
            messageId: "default"
          });
        }

      }
    };
  }
};
