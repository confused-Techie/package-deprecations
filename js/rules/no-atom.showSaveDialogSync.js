
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow usage of `atom.showSaveDialogSync`."
    },
    messages: {
      default: "`atom.showSaveDialogSync` is deprecated and will be removed soon."
    }
  },
  test: {
    invalid: [{
      // Example: https://github.com/atom/markdown-preview/pull/521
      // Example: https://github.com/danielgtaylor/atom-api-blueprint-preview/blob/v0.7.0/lib/api-blueprint-preview-view.coffee#L269
      // Example: https://github.com/asciidoctor/atom-asciidoc-preview/blob/v2.10.2/lib/asciidoc-preview-view.coffee#L239
      // Example: https://github.com/msyrus/atom-api-blueprint-preview/blob/v0.8.0/lib/api-blueprint-preview-view.coffee#L269
      // More examples: https://github.com/atom/atom/pull/16245#issuecomment-346101092
      code: "const htmlFilePath = atom.showSaveDialogSync(filePath);",
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
          node.property.name === "showSaveDialogSync"
        ) {
          context.report({ node, messageId: "default" });
        }
      }
    };
  }
};
