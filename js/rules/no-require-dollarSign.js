const utils = require("../utils.js");

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow requring `$` from `atom` module."
    },
    messages: {
      default: "Requiring `$` from `atom` is no longer supported. If you are using `space-pen`, please require `$` from `atom-space-pen-views`. Otherwise require `jquery` instead."
    }
  },
  test: {
    valid: [{
      code: "const { $ } = require('atom-space-pen-views');"
    }],
    invalid: [{
      code: "const { $ } = require('atom');",
      errors: [{ messageId: "default" }]
    }]
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        let isAtomModule = utils.variableDeclarator_requireModule(node, "atom");
        let doesRequireDollarSign = utils.variableDeclarator_objectAssign(node, "$");

        if (isAtomModule && doesRequireDollarSign) {
          context.report({
            node,
            messageId: "default"
          });
        }
      }
    };
  }
};
