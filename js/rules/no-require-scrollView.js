const utils = require("../utils.js");

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow requiring `ScrollView` from `atom` module."
    }
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        let isAtomModule = utils.variableDeclarator_requireModule(node, "atom");
        let doesRequireScrollView = utils.variableDeclarator_objectAssign(node, "ScrollView");

        if (isAtomModule && doesRequireScrollView) {
          context.report({
            node,
            message: "Requring `ScrollView` from `atom` is no longer supported. Please require `ScrollView` from `atom-space-pen-view` instead."
          });
        }

      }
    };
  }
};
