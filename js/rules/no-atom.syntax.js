
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow usage of `atom.syntax`"
    },
    messages: {
      default: "The `atom.syntax` global is deprecated. Use `atom.grammars` instead."
    }
  },
  test: {
    invalid: [{
      // Example: https://github.com/p-e-w/language-javascript-semantic/blob/v0.1.0/lib/main.coffee#L13
      code: "atom.syntax.addGrammar(new JavaScriptSemanticGrammar(atom.syntax, {}));",
      errors: [{ messageId: "default" }, { messageId: "default" }]
      // This example has two uses of atom.syntax, both of which we expect to be caught
    }, {
      // Example: https://github.com/RYTong/emp-debugger/blob/v0.6.13/lib/view/emp-enable-lua-view.coffee#L167
      code: "const grammars = atom.syntax.getGrammars().filter(grammar => (grammar !== atom.syntax.nullGrammar) && (grammar.name === 'Lua'));",
      errors: [{ messageId: "default" }, { messageId: "default" }]
      // This example has two uses of atom.syntax, both of which we expect to be caught
    }]
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (
          node.object.type === "Identifier" &&
          node.object.name === "atom" &&
          node.property.type === "Identifier" &&
          node.property.name === "syntax"
        ) {
          context.report({ node, messageId: "default" });
        }
      }
    };
  }
};
