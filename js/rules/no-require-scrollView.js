const utils = require("../utils.js");

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow requiring `ScrollView` from `atom` module."
    },
    messages: {
      default: "Requring `ScrollView` from `atom` is no longer supported. Please require `ScrollView` from `atom-space-pen-views` instead."
    }
  },
  test: {
    valid: [{
      code: "const { ScrollView } = require('atom-space-pen-views');"
    }],
    invalid: [{
      code: "const { ScrollView } = require('atom');",
      errors: [{ messageId: "default" }]
    }]
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        let isAtomModule = utils.variableDeclarator_requireModule(node, "atom");
        let doesRequireScrollView = utils.variableDeclarator_objectAssign(node, "ScrollView");

        if (isAtomModule && doesRequireScrollView) {
          context.report({
            node,
            messageId: "default"
          });
        }

      }
    };
  }
};
