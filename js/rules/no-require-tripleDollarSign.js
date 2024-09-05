const utils = require("../utils.js");

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow requiring `$$$` from `atom` module."
    }
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        let isAtomModule = utils.variableDeclarator_requireModule(node, "atom");
        let doesRequireDollarSign = utils.variableDeclarator_objectAssign(node, "$$$");

        if (isAtomModule && doesRequireDollarSign) {
          context.report({
            node,
            message: "Requiring `$$$` from `atom` is no longer supported. Please require `atom-space-pen-views` instead: `{$$$} = require 'atom-space-pen-views'`."
          });
        }
      }
    };
  }
};
