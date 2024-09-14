
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Warn when calling `Dock::getActiveTextEditor` as text editors are no longer allowed in docks."
    },
    messages: {
      default: "`Dock::getActiveTextEditor` Text editors are not allowed in docks. Use `atom.workspace.getActiveTextEditor()` instead."
    }
  },
  test: {
    invalid: [{
      // Example: https://github.com/atom/atom/pull/14695
      code: "atom.workspace.getLeftDock().getActiveTextEditor();",
      errors: [{ messageId: "default" }]
    }]
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (
          node.object.type === "CallExpression" &&
          node.object.callee.type === "MemberExpression" &&
          node.object.callee.object.type === "MemberExpression" &&
          node.object.callee.object.object.type === "Identifier" &&
          node.object.callee.object.object.name === "atom" &&
          node.object.callee.object.property.type === "Identifier" &&
          node.object.callee.object.property.name === "workspace" &&
          node.object.callee.property.type === "Identifier"  &&
          (
            node.object.callee.property.name === "getLeftDock" ||
            node.object.callee.property.name === "getRightDock" ||
            node.object.callee.property.name === "getBottomDock"
          ) &&
          node.property.type === "Identifier" &&
          node.property.name === "getActiveTextEditor"
        ) {
          context.report({ node, messageId: "default" });
        }
      }
    };
  }
};
