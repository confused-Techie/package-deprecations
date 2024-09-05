
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow usage of `atom.workspaceView`"
    }
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (
          node.property.type === "Identifier" &&
          node.object.type === "MemberExpression" &&
          node.object.property.type === "Identifier" &&
          node.object.property.name === "workspaceView" &&
          node.object.object.type === "Identifier" &&
          node.object.object.name === "atom"
        ) {
          context.report({
            node,
            message: "`atom.workspaceView` is no longer available."
          });
        }
      }
    };
  }
};
