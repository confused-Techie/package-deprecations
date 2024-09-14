
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow `changeFocus` option in several `atom.workspace` methods."
    },
    messages: {
      open: "`atom.workspace.open` Opts: The `changeFocus` option has been renamed to `activatePane`.",
      openSync: "`atom.workspace.openSync` Opts: The `changeFocus` option has been renamed to `activatePane`.",
      openURIInPane: "`atom.workspace.openURIInPane` Opts: The `changeFocus` option has been renamed to `activatePane`."
    }
  },
  test: {
    valid: [{
      code: "atom.workspace.open(uri, {split: 'right', activatePane: false, searchAllPanes: true});"
    }, {
      code: "atom.workspace.openSync(uri, {split: 'right', activatePane: false, searchAllPanes: true });"
    }, {
      code: "atom.workspace.openURIInPane(uri, {split: 'right', activatePane: false, searchAllPanes: true });"
    }],
    invalid: [{
      // Example: https://github.com/fcoury/atom-rspec/blob/v0.3.0/lib/rspec.coffee#L57C5-L60C38
      // Example: https://github.com/launchscout/atom-cucumber-runner/blob/v0.1.1/lib/cucumber-runner.coffee#L40
      code: `atom.workspace.open(uri, {split: 'right', changeFocus: false, searchAllPanes: true }).done(function(rspecView) {
        if (rspecView instanceof RSpecView) {
          rspecView.run(lineNumber);
          return previousActivePane.activate();
        }
      });`,
      errors: [{ messageId: "open" }]
    }, {
      code: "atom.workspace.openSync(uri, {split: 'right', changeFocus: false, searchAllPanes: true });",
      errors: [{ messageId: "openSync" }]
    }, {
      code: "atom.workspace.openURIInPane(uri, {split: 'right', changeFocus: false, searchAllPanes: true });",
      errors: [{ messageId: "openURIInPane" }]
    }]
  },
  create(context) {
    return {
      CallExpression(node) {
        let matches_open = false;
        let matches_openSync = false;
        let matches_openURIInPane = false;

        if (
          node.type === "CallExpression" &&
          node.callee.type === "MemberExpression" &&
          node.callee.object.type === "MemberExpression" &&
          node.callee.object.object.type === "Identifier" &&
          node.callee.object.property.type === "Identifier" &&
          node.callee.property.type === "Identifier"
        ) {

          if (
            node.callee.object.object.name === "atom" &&
            node.callee.object.property.name === "workspace" &&
            node.callee.property.name === "open"
          ) {
            matches_open = true;
          }

          if (
            node.callee.object.object.name === "atom" &&
            node.callee.object.property.name === "workspace" &&
            node.callee.property.name === "openSync"
          ) {
            matches_openSync = true;
          }

          if (
            node.callee.object.object.name === "atom" &&
            node.callee.object.property.name === "workspace" &&
            node.callee.property.name === "openURIInPane"
          ) {
            matches_openURIInPane = true;
          }

          if (matches_open || matches_openSync || matches_openURIInPane) {
            if (Array.isArray(node.arguments)) {
              for (let i = 0; i < node.arguments.length; i++) {
                if (node.arguments[i].type === "ObjectExpression" && Array.isArray(node.arguments[i].properties)) {
                  for (let y = 0; y < node.arguments[i].properties.length; y++) {
                    if (
                      node.arguments[i].properties[y].type === "Property" &&
                      node.arguments[i].properties[y].key.type === "Identifier" &&
                      node.arguments[i].properties[y].key.name === "changeFocus"
                    ) {

                      if (matches_open) { context.report({ node, messageId: "open" }); }
                      if (matches_openSync) { context.report({ node, messageId: "openSync" }); }
                      if (matches_openURIInPane) { context.report({ node, messageId: "openURIInPane" }); }
                    }
                  }
                }
              }
            }
          }

        }
      }
    };
    // return {
    //   MemberExpression(node) {
    //     let matches_open = false;
    //     let matches_openSync = false;
    //     let matches_openURIInPane = false;
    //
    //     if (
    //       node.type === "MemberExpression" &&
    //       node.object.type === "MemberExpression" &&
    //       node.object.property.type === "Identifier" &&
    //       node.property.type === "Identifier"
    //     ) {
    //       // First make sure types match, then check specifics
    //
    //       if (
    //         node.object.object.name === "atom" &&
    //         node.object.property.name === "workspace" &&
    //         node.property.name === "open"
    //       ) {
    //         matches_open = true;
    //       }
    //
    //       if (
    //         node.object.object.name === "atom" &&
    //         node.object.property.name === "workspace" &&
    //         node.property.name === "openSync"
    //       ) {
    //         matches_openSync = true;
    //       }
    //
    //       if (
    //         node.object.object.name === "atom" &&
    //         node.object.property.name === "workspace" &&
    //         node.property.name === "openURIInPane"
    //       ) {
    //         matches_openURIInPane = true;
    //       }
    //
    //       if (matches_open || matches_openSync || matches_openURIInPane) {
    //         if (Array.isArray(node.arguments)) {
    //           for (let i = 0; i < node.arguments.length; i++) {
    //             if (node.arguments[i].type === "ObjectExpression" && Array.isArray(node.arguments[i].properties)) {
    //               for (let y = 0; y < node.arguments[i].properties.length; y++) {
    //                 if (
    //                   node.arguments[i].properties[y].type === "Property" &&
    //                   node.arguments[i].properties[y].key.type === "Identifier" &&
    //                   node.arguments[i].properties[y].key.name === "changeFocus"
    //                 ) {
    //
    //                   if (matches_open) { context.report({ node, messageId: "open" }); }
    //                   if (matches_openSync) { context.report({ node, messageId: "openSync" }); }
    //                   if (matches_openURIInPane) { context.report({ node, messageId: "openURIInPane" }); }
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // };
  }
};
