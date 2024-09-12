const utils = require("../utils.js");

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow usage of `atom.registerRepresentationClass`"
    },
    messages: {
      default: "`atom.registerRepresentationClass` is no longer available."
    }
  },
  // TODO: How did this actually function?
  // Here is the last commit before it was removed: https://github.com/atom/atom/blob/914a87290bd7b64d3cdc9053f9734b825f3ccd40/src/atom.coffee#L163
  // The next commit adds the deprecation. This method seems to be available via
  // the "Model" class "atom" extends, which comes from the "telepath" NPM module.
  // Which no longer exists. Likely renamed as 'teletype' but isn't clear.
  // The tests fail here, cannot recall what I had originally thought this looked like,
  // but 'utils.memberExpression_matchMethods' may be broken??
  // test: {
  //   invalid: [{
  //     code: "atom.registerRepresentationClass('things', () => {});",
  //     errors: [{ messageId: "default" }]
  //   }]
  // },
  create(context) {
    return {
      MemberExpression(node) {
        if (utils.memberExpression_matchMethods(node, "atom", "registerRepresentationClass")) {
          context.report({
            node,
            messageId: "default"
          });
        }
      }
    };
  }
};
