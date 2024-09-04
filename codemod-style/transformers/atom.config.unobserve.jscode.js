
module.exports =
function transform(fileInfo, api, options) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  const atomConfig = root.find(j.CallExpression, {
    callee: {
      type: "MemberExpression",
      object: {
        type: "MemberExpression",
        object: {
          type: "Identifier",
          name: "atom"
        },
        property: {
          type: "Identifier",
          name: "config"
        }
      },
      property: {
        type: "Identifier",
        name: "unobserve"
      }
    }
  });

  if (atomConfig.length > 0) {
    throw new Error("Config::unobserve no longer does anything. Call `.dispose()` on the object returned by Config::observe instead.");
  }

  return root.toSource();
}
