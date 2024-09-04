
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow requiring `View` from `atom` module."
    },
    fixable: "code",
    schema: []
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        let isAtomModule = false;
        let doesRequireView = false;

        if (
          node.init.type === "CallExpression" &&
          node.init.callee.type === "Identifier" &&
          node.init.callee.name === "require" &&
          Array.isArray(node.init.arguments) &&
          node.init.arguments[0].value === "atom"
        ) {
          isAtomModule = true;
        }

        if (node.id.type === "ObjectPattern" && Array.isArray(node.id.properties)) {
          for (let i = 0; i < node.id.properties.length; i++) {
            if (
              node.id.properties[i].type === "Property" &&
              node.id.properties[i].value.type === "Identifier" &&
              node.id.properties[i].value.name === "View"
            ) {
              doesRequireView = true;
            }
          }
        }

        if (isAtomModule && doesRequireView) {
          context.report({
            node,
            message: "Requiring `View` from `atom` is no longer supported. Please require `atom-space-pen-views` instead: `{View} = require 'atom-space-pen-views'`"
          });
        }

      }
    };
  }
};
