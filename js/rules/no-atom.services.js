
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow usage of `atom.services`"
    }
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (
          node.property.type === "Identifier" &&
          node.object.type === "MemberExpression" &&
          node.object.property.type === "Identifier" &&
          node.object.property.name === "services" &&
          node.object.object.type === "Identifier" &&
          node.object.object.name === "atom"
        ) {
          context.report({
            node,
            message: "`atom.services` is no longer available."
          });
        }
      }
    };
  }
};
