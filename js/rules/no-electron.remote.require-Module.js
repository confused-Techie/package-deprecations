
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Warn when using deprecated modules in `electron.remote.require(module)`."
    },
    messages: {
      menu: "Use `remote.Menu` instead of `remote.require('menu')`",
      menuItem: "Use `remote.MenuItem` instead of `remote.require('menu-item')`",
      browserWindow: "Use `remote.BrowserWindow` instead of `remote.require('browser-window')`",
      dialog: "Use `remote.Dialog` instead of `remote.require('dialog')`",
      app: "Use `remote.app` instead of `remote.require('app')`",
      crashReporter: "Use `remote.crashReporter` instead of `remote.require('crashReporter')`",
      globalShortcut: "Use `remote.globalShortcut` instead of `remote.require('global-shortcut')`",
      clipboard: "Use `remote.clipboard` instead of `remote.require('clipboard')`",
      nativeImage: "Use `remote.nativeImage` instead of `remote.require('native-image')`",
      tray: "Use `remote.Tray` instead of `remote.require('tray')`"
    }
  },
  test: {
    valid: [{
      // Example: https://github.com/atom/atom/pull/12300/files
      // ^^ spec/atom-environment-spec.coffee changes
      code: "const menu = require('electron').remote.Menu;"
    }],
    invalid: [{
      // Example: https://github.com/atom/atom/pull/12300/files
      // ^^ spec/atom-environment-spec.coffee changes
      code: "const menu = require('electron').remote.require('menu');",
      errors: [{ messageId: "menu" }]
    }, {
      code: "const MenuItem = remote.require('menu-item');",
      errors: [{ messageId: "menuItem" }]
    }, {
      code: "const BrowserWindow = require('electron').remote.require('browser-window');",
      errors: [{ messageId: "browserWindow" }]
    }, {
      code: "const Dialog = remote.require('dialog');",
      errors: [{ messageId: "dialog" }]
    }, {
      code: "const app = require('electron').remote.require('app');",
      errors: [{ messageId: "app" }]
    }, {
      code: "const CrashReporter = require('electron').remote.require('crashReporter');",
      errors: [{ messageId: "crashReporter" }]
    }, {
      code: "const globalShortcut = remote.require('global-shortcut');",
      errors: [{ messageId: "globalShortcut" }]
    }, {
      code: "const clipboard = require('electron').remote.require('clipboard');",
      errors: [{ messageId: "clipboard" }]
    }, {
      code: "const nativeImage = remote.require('native-image');",
      errors: [{ messageId: "nativeImage" }]
    }, {
      code: "const tray = require('electron').remote.require('tray');",
      errors: [{ messageId: "tray" }]
    }]
  },
  create(context) {
    return {
      MemberExpression(node) {
        let matches = false;
        let mod = null;

        if (
          node.property.type === "Identifier" &&
          node.property.name === "remote" &&
          node.parent.type === "MemberExpression" &&
          node.parent.property.type === "Identifier" &&
          node.parent.property.name === "require" &&
          Array.isArray(node.parent.parent.arguments) &&
          node.parent.parent.arguments.length === 1 &&
          node.parent.parent.arguments[0].type === "Literal"
        ) {
          // matches:
          // const MenuItem = electron.remote.require("menu-item");
          // const MenuItem = require("electron").remote.require("menu-item");
          matches = true;
          mod = node.parent.parent.arguments[0].value;
        }

        if (
          node.object.type === "Identifier" &&
          node.object.name === "remote" &&
          node.property.type === "Identifier" &&
          node.property.name === "require" &&
          Array.isArray(node.parent.arguments) &&
          node.parent.arguments.length === 1 &&
          node.parent.arguments[0].type === "Literal"
        ) {
          // matches:
          // const MenuItem = remote.require("menu-item");
          matches = true;
          mod = node.parent.arguments[0].value;
        }

        if (matches) {
          switch(mod) {
            case "menu":
              context.report({ node, messageId: "menu" });
              break;
            case "menu-item":
              context.report({ node, messageId: "menuItem" });
              break;
            case "browser-window":
              context.report({ node, messageId: "browserWindow" });
              break;
            case "dialog":
              context.report({ node, messageId: "dialog" });
              break;
            case "app":
              context.report({ node, messageId: "app" });
              break;
            case "crashReporter":
              context.report({ node, messageId: "crashReporter" });
              break;
            case "global-shortcut":
              context.report({ node, messageId: "globalShortcut" });
              break;
            case "clipboard":
              context.report({ node, messageId: "clipboard" });
              break;
            case "native-image":
              context.report({ node, messageId: "nativeImage" });
              break;
            case "tray":
              context.report({ node, messageId: "tray" });
              break;
          }
        }
      }
    };
  }
};
