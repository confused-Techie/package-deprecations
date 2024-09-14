
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Warn on usage of `atom.config::unobserve`."
      // TODO: Research: While this warning says it does nothing, within Pulsar 1.120.0 the method is totally removed.
    },
    messages: {
      default: "Config::unobserve no longer does anything. Call `.dispose()` on the object returned by Config::observe instead."
    }
  },
  test: {
    valid: [{
      code: "const val = atom.config.observe('setting'); val.dispose();"
    }],
    invalid: [{
      code: "atom.config.unobserve('setting', () => { doThing(); })",
      errors: [{ messageId: "default" }]
    }, {
      // Example: https://github.com/bsnux/linter-python-pep8/blob/v0.2.0/lib/linter-python-pep8.coffee#L31
      code: "atom.config.unobserve('linter-python-pep8.pep8DirToExecutable');",
      errors: [{ messageId: "default" }]
    }]
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (
          node.property.type === "Identifier" &&
          node.property.name === "unobserve" &&
          node.object.type === "MemberExpression" &&
          node.object.property.type === "Identifier" &&
          node.object.property.name === "config" &&
          node.object.object.type === "Identifier" &&
          node.object.object.name === "atom"
        ) {
          context.report({
            node,
            messageId: "default"
          });
        }
      }
    };
  }
};
