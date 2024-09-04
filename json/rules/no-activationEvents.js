const path = require("node:path");

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow usage of `activationEvents`."
    }
  },
  create(context) {
    return {
      JSONProperty(node) {
        const name = node.key.value;
        if (name === "activationEvents" && path.parse(context.filename).base === "package.json") {
          context.report({
            node,
            message: "Use `activationCommands` instead of `activationEvents` in your `package.json`."
          });
        }
      }
    };
  }
};
