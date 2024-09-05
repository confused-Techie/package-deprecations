const utils = require("../utils.js");

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow requiring `SelectListView` from `atom` module."
    }
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        let isAtomModule = utils.variableDeclarator_requireModule(node, "atom");
        let doesRequireSelectListView = utils.variableDeclarator_objectAssign(node, "SelectListView");

        if (isAtomModule && doesRequireSelectListView) {
          context.report({
            node,
            message: "Requiring `SelectListView` from `atom` is no longer supported. Please require `SelectListView` from `atom-space-pen-view` instead."
          });
        }

      }
    };
  }
};
