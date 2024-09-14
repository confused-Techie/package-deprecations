
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Warn when passing a single object parameter to `atom.views.addViewProvider`."
    },
    messages: {
      default: "`atom.views.addViewProvider` now takes 2 arguments: a model constructor and a createView function."
    }
  },
  test: {
    valid: [{
      code: "atom.views.addViewProvider(PanelContainer, model => new PanelContainerElement().initialize(model));"
    }],
    invalid: [{
      // Example: https://github.com/atom/atom/pull/4365
      // ^^ Pulled from previous specs
      code: "atom.views.addViewProvider({ modelConstructor: PanelContainer, viewConstructor: PanelContainerElement });",
      errors: [{ messageId: "default" }]
    }]
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.type === "MemberExpression" &&
          node.callee.object.type === "MemberExpression" &&
          node.callee.object.object.type === "Identifier" &&
          node.callee.object.object.name === "atom" &&
          node.callee.object.property.type === "Identifier" &&
          node.callee.object.property.name === "views" &&
          node.callee.property.type === "Identifier" &&
          node.callee.property.name === "addViewProvider" &&
          Array.isArray(node.arguments) &&
          node.arguments.length === 1 &&
          node.arguments[0].type === "ObjectExpression"
        ) {
          context.report({ node, messageId: "default" });
        }
      }
    };
  }
};
