
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow usage of `atom.workspaceView`"
    },
    messages: {
      default: "`atom.workspaceView` is no longer available."
    }
  },
  test: {
    invalid: [{
      // Example: https://github.com/yujinakayama/atom-lint/blob/v0.20.1/lib/lint-status-view.coffee#L27
      code: "const editorView = atom.workspaceView.getActiveView();",
      errors: [{ messageId: "default" }]
    }, {
      // Example: https://github.com/yujinakayama/atom-lint/blob/v0.20.1/lib/atom-lint.coffee#L20
      code: "atom.workspaceView?.off('lint:toggle-violation-metadata');",
      errors: [{ messageId: "default" }]
    }, {
      // Example: https://github.com/yujinakayama/atom-lint/blob/v0.20.1/lib/atom-lint.coffee#L13
      code: "atom.workspaceView.command('lint:toggle', () => this.toggle());",
      errors: [{ messageId: "default" }]
    }, {
      // Example: https://github.com/yujinakayama/atom-lint/blob/v0.20.1/lib/atom-lint.coffee#L28
      code: `const editorViewSubscription = atom.workspaceView.eachEditorView((editorView) => {
        injectLintViewIntoEditorView(editorView);
      });`,
      errors: [{ messageId: "default" }]
    }, {
      // Example: https://github.com/yujinakayama/atom-lint/blob/v0.20.1/lib/atom-lint.coffee#L74
      code: "const statusBar = atom.workspaceView.statusBar;",
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
          node.property.name === "workspaceView"
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
