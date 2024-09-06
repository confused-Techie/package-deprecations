
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow usage of `atom.syntax`"
    }
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (
          node.property.type === "Identifier" &&
          node.object.type === "MemberExpression" &&
          node.object.property.type === "Identifier" &&
          node.object.property.name === "syntax" &&
          node.object.object.type === "Identifier" &&
          node.object.object.name === "atom"
        ) {
          context.report({
            node,
            message: "The `atom.syntax` global is deprecated. Use `atom.grammars` instead."
          });
        }
      }
    };
  }
};
