
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow requiring deprecated modules."
    },
    messages: {
      clipboard: "Use `require('electron').clipboard` instead of `require('clipboard')`.",
      ipc: "Use `require('electron').ipcRenderer` instead of `require('ipc')`.",
      remote: "Use `require('electron').remote` instead of `require('remote')`.",
      shell: "Use `require('electron').shell` instead of `require('shell')`.",
      webFrame: "Use `require('electron').webFrame` instead of `require('web-frame')`."
    }
  },
  test: {
    valid: [{
      code: "const clipboard = require('electron').clipboard;"
    }, {
      code: "const ipc = require('electron').ipcRenderer;"
    }],
    invalid: [{
      code: "const clipboard = require('clipboard');",
      errors: [{ messageId: "clipboard" }]
    }, {
      code: "const ipc = require('ipc');",
      errors: [{ messageId: "ipc" }]
    }, {
      code: "const remote = require('remote');",
      errors: [{ messageId: "remote" }]
    }, {
      code: "const shell = require('shell');",
      errors: [{ messageId: "shell" }]
    }, {
      code: "const webFrame = require('web-frame');",
      errors: [{ messageId: "webFrame" }]
    }]
  },
  create(context) {
    return {
      VariableDeclarator(node) {
        if (
          node.init.type === "CallExpression" &&
          node.init.callee.type === "Identifier" &&
          node.init.callee.name === "require" &&
          Array.isArray(node.init.arguments) &&
          node.init.arguments.length === 1 &&
          node.init.arguments[0].type === "Literal"
        ) {
          switch(node.init.arguments[0].value) {
            case "clipboard":
              context.report({ node, messageId: "clipboard" });
              break;
            case "ipc":
              context.report({ node, messageId: "ipc" });
              break;
            case "remote":
              context.report({ node, messageId: "remote" });
              break;
            case "shell":
              context.report({ node, messageId: "shell" });
              break;
            case "web-frame":
              context.report({ node, messageId: "webFrame" });
              break;
          }
        }
      }
    };
  }
};
