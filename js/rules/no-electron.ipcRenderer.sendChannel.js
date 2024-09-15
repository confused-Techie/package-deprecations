
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Warn when using deprecated `electron.ipcRenderer.sendChannel()`."
    },
    messages: {
      default: "Use `ipcRenderer.send` instead of `ipcRenderer.sendChannel`"
    }
  },
  test: {
    valid: [{
      code: "electron.ipcRenderer.send('thing');"
    }],
    invalid: [{
      code: "electron.ipcRenderer.sendChannel('thing');",
      errors: [{ messageId: "default" }]
    }]
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (
          node.object.type === "MemberExpression" &&
          node.object.object.type === "Identifier" &&
          node.object.object.name === "electron" &&
          node.object.property.type === "Identifier" &&
          node.object.property.name === "ipcRenderer" &&
          node.property.type === "Identifier" &&
          node.property.name === "sendChannel"
        ) {
          context.report({ node, messageId: "default" });
        }
      }
    };
  }
};
