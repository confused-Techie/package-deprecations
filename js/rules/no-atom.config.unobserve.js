
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Warn on usage of `atom.config::unobserve`."
    },
    fixable: "code",
    schema: []
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (
          node.property.type === "Identifier" &&
          node.property.name === "unobserve" &&
          node.object.type === "MemberExpression" &&
          node.object.property.type === "Identifier" &&
          node.object.property.name === "config" &&
          node.object.object.type === "Identifier" &&
          node.object.object.name === "atom"
        ) {
          context.report({
            node,
            message: "Config::unobserve no longer does anything. Call `.dispose()` on the object returned by Config::observe instead."
          });
        }
      }
    };
  }
};
