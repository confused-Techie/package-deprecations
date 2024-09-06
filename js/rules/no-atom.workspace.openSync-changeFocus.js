
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow `changeFocus` option in `atom.workspace.openSync` opts."
    }
  },
  create(context) {
    return {
      CallExpression(node) {
        let matches = false;

        if (
          node.type === "CallExpression" &&
          node.callee.type === "MemberExpression" &&
          node.callee.object.type === "Identifier" &&
          node.callee.object.name === "workspace" &&
          node.callee.property.type === "Identifier" &&
          node.callee.property.name === "openSync"
        ) {
          // matches `workspace.openSync()`
          matches = true;
        }

        if (
          node.type === "CallExpression" &&
          node.callee.type === "MemberExpression" &&
          node.callee.object.type === "MemberExpression" &&
          node.callee.object.object.type === "Identifier" &&
          node.callee.object.object.name === "atom" &&
          node.callee.object.property.type === "Identifier" &&
          node.callee.object.property.name === "workspace" &&
          node.callee.property.type === "Identifier" &&
          node.callee.property.name === "openSync"
        ) {
          // matches `atom.workspace.openSync()`
          matches = true;
        }

        if (matches) {
          if (Array.isArray(node.arguments)) {
            for (let i = 0; i < node.arguments.length; i++) {
              if (node.arguments[i].type === "ObjectExpression" && Array.isArray(node.arguments[i].properties)) {
                for (let y = 0; y < node.arguments[i].properties.length; y++) {
                  if (
                    node.arguments[i].properties[y].type === "Property" &&
                    node.arguments[i].properties[y].key.type === "Identifier" &&
                    node.arguments[i].properties[y].key.name === "changeFocus"
                  ) {
                    context.report({
                      node,
                      message: "`atom.workspace.openSync` Opts: The `changeFocus` option has been renamed to `activatePane`."
                    });
                  }
                }
              }
            }
          }
        }
      }

      // MemberExpression(node) {
      //   if (
      //     node.object.type === "Identifier" &&
      //     node.object.name === "workspace" &&
      //     node.property.type === "Identifier" &&
      //     node.property.name === "openSync"
      //   ) {
      //     if (Array.isArray(node.arguments)) {
      //       for (let i = 0; i < node.arguments.length; i++) {
      //         if (node.arguments[i].type === "ObjectExpression" && Array.isArray(node.arguments[i].properties)) {
      //           for (let y = 0; y < node.arguments[i].properties.length; y++) {
      //             if (
      //               node.arguments[i].properties[y].type === "Property" &&
      //               node.arguments[i].properties[y].key.type === "Identifier" &&
      //               node.arguments[i].properties[y].key.name === "changeFocus"
      //             ) {
      //               context.report({
      //                 node,
      //                 message: "`atom.workspace.openSync` Opts: The `changeFocus` option has been renamed to `activatePane`."
      //               });
      //             }
      //           }
      //         }
      //       }
      //     }
      //   }
      // }
    };
  }
};
