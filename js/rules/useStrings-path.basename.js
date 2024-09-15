const utils = require("../utils.js");

module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Warn when calling `path.basename()` and passing a non-literal string as the first and second arguments."
    },
    messages: {
      default: "Arguments to `path.basename` must be a string."
    }
  },
  test: {
    valid: [{
      code: "const thing = path.basename('value', 'value2');"
    }],
    invalid: [{
      code: "const thing = path.basename({ hello: 'world' }, { hello: 'world' });",
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
          node.callee.property.name === "basename" &&
          Array.isArray(node.arguments)
        ) {

          if (node.arguments.length === 1 && !utils.isString(node.arguments[0].raw)) {
            context.report({ node, messageId: "default" });
          } else if (node.arguments.length === 2 && (!utils.isString(node.arguments[0].raw) || !utils.isString(node.arguments[1].raw))) {
            context.report({ node, messageId: "default" });
          }
        }
      }
    };
  }
};
