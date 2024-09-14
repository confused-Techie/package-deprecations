
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow usage of `atom.services`"
    },
    messages: {
      default: "`atom.services` is no longer available."
    }
  },
  test: {
    invalid: [{
      // Example: https://github.com/atom-community/autocomplete-paths/blob/v1.0.1/lib/autocomplete-paths.coffee#L8
      // Example: https://github.com/lierdakil/atom-zotero-bibtex-autocomplete/blob/b2cebda430a698bf8890810aeb764b9574fceab2/lib/zotero-bibtex-autocomplete.coffee#L64
      code: "const registration = atom.services.provide('autocomplete.provider', '1.0.0', { provider: pathsProvider });",
      errors: [{ messageId: "default" }]
    }, {
      code: "const services = atom.services;",
      errors: [{ messageId: "default" }]
    }]
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (
          node.object.type === "Identifier" &&
          node.object.name === "atom" &&
          node.property.type === "Identifier" &&
          node.property.name === "services"
        ) {
          context.report({ node, messageId: "default" });
        }
      }
    };
  }
};
