
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow requiring `$` from `atom` module."
    }
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        let isAtomModule = false;
        let doesRequireDollarSign = false;

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
              node.id.properties[i].value.name === "$$"
            ) {
              doesRequireDollarSign = true;
            }
          }
        }

        if (isAtomModule && doesRequireDollarSign) {
          context.report({
            node,
            message: "Requiring `$$` from `atom` is no longer supported. Please require `atom-space-pen-views` instead: `{$$} = require 'atom-space-pen-views'`."
          });
        }
      }
    };
  }
};
