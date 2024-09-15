const utils = require("../utils.js");

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Warn when calling `path.extname()` and passing a non-literal string as the first and only argument."
    },
    messages: {
      default: "Argument to `path.extname` must be a string."
    }
  },
  test: {
    valid: [{
      code: "const thing = path.extname('value');"
    }],
    invalid: [{
      code: "const thing = path.extname({ hello: 'world' });",
      errors: [{ messageId: "default" }]
    }]
  },
  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.type === "MemberExpression" &&
          node.callee.object.type === "Identifier" &&
          node.callee.object.name === "path" &&
          node.callee.property.type === "Identifier" &&
          node.callee.property.name === "extname" &&
          Array.isArray(node.arguments) &&
          node.arguments.length === 1 &&
          !utils.isString(node.arguments[0].raw)
        ) {
          context.report({ node, messageId: "default" });
        }
      }
    };
  }
};
