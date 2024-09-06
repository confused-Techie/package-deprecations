const utils = require("../utils.js");

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow usage of `atom.registerRepresentationClass`"
    }
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (utils.memberExpression_matchMethods(node, "atom", "registerRepresentationClass")) {
          context.report({
            node,
            message: "`atom.registerRepresentationClass` is no longer available."
          });
        }
      }
    };
  }
};
