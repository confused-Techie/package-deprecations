
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Enforce that a variable named `foo` can only be assigned a value of `bar`.",
    },
    fixable: "code",
    schema: []
  },
  create(context) {
    return {
      // Preforms action in the function on every variable declarator
      VariableDeclarator(node) {
        // Check if a 'const' variable declaration
        if (node.parent.kind === "const") {
          // Check if variable name is 'foo'
          if (node.id.type === "Identifier" && node.id.name === "foo") {
            // Check if avalue of variable is "bar"
            if (node.init && node.init.type === "Literal" && node.init.value !== "bar") {
              // Report error to ESLint
              context.report({
                node,
                message: 'Value other than "bar" assigned to `const foo`. Unexpected value: {{ notBar }}.',
                data: {
                  notBar: node.init.value
                },
                fix(fixer) {
                  return fixer.replaceText(node.init, '"bar"');
                }
              });
            }
          }
        }
      }
    };
  }
};
