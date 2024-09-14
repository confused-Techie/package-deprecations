const path = require("node:path");

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow usage of `activationEvents`."
    },
    messages: {
      default: "Use `activationCommands` instead of `activationEvents` in your `package.json`."
    }
  },
  test: {
    valid: [{
      filename: "package.json",
      code: JSON.stringify({
        activationCommands: {
          "atom-workspace": ["foo:bar", "foo:baz"],
          "atom-text-editor": ["foox:quux"]
        }
      })
    }],
    invalid: [{
      filename: "package.json",
      code: JSON.stringify({
        activationEvents: {
          "atom-workspace": ["foo:bar", "foo:baz"],
          "atom-text-editor": ["foox:quux"]
        }
      }),
      errors: [{ messageId: "default" }]
    }]
  },
  create(context) {
    return {
      JSONProperty(node) {
        const name = node.key.value;
        if (name === "activationEvents" && path.parse(context.filename).base === "package.json") {
          context.report({
            node,
            messageId: "default"
          });
        }
      }
    };
  }
};
