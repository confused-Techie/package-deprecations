
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Warn when calling `atom.workspace.paneContainer`."
    },
    messages: {
      default: "`atom.workspace.paneContainer` has always been private, but it is now gone."
    }
  },
  test: {
    valid: [{
      code: "atom.workspace.getCenter().paneContainer.root.children[0];"
    }],
    invalid: [{
      code: "atom.workspace.paneContainer.root.children[0];",
      errors: [{ messageId: "default" }]
    }]
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (
          node.object.type === "Identifier" &&
          node.object.name === "atom" &&
          node.property.type === "Identifier" &&
          node.property.name === "workspace" &&
          node.parent.type === "MemberExpression" &&
          node.parent.property.type === "Identifier" &&
          node.parent.property.name === "paneContainer"
        ) {
          context.report({ node, messageId: "default" });
        }
      }
    };
  }
};
