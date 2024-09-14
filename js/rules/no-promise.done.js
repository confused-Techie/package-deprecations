
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Warn on usage of Q-like `Promise.done()` calls."
    },
    messages: {
      default: "Pulsar now uses ES6 Promises instead of Q. Call `promise.then` instead of `promise.done`."
    }
  },
  test: {
    invalid: [{
      code: "Promise.done();",
      errors: [{ messageId: "default" }]
    }, {
      // Example: https://github.com/tshort/atom-mdpad/blob/v0.3.3/lib/mdpad.coffee#L52
      // ^^ Justification: https://github.com/atom/atom/issues/23653
      code: "atom.workspace.open(uri, { split: 'right', searchAllPanes: true }).done(function(mdpadPreviewView) { });",
      errors: [{ messageId: "default" }]
    }]
  },
  create(context) {
    return {
      ExpressionStatement(node) {
        if (
          node.expression.type === "CallExpression" &&
          node.expression.callee.type === "MemberExpression" &&
          node.expression.callee.property.name === "done"
        ) {
          context.report({ node, messageId: "default" });
        }
      }
    };
  }
};
