const utils = require("../utils.js");

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow usage of `atom.registerRepresentationClasses`"
    }
  },
  // TODO tests 
  create(context) {
    return {
      MemberExpression(node) {
        if (utils.memberExpression_matchMethods(node, "atom", "registerRepresentationClasses")) {
          context.report({
            node,
            message: "`atom.registerRepresentationClasses` is no longer available."
          });
        }
      }
    };
  }
};
