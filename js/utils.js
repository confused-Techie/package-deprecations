
// When the initial node is a VariableDeclarator:
// Determine if we are requiring a module by name.
function variableDeclarator_requireModule(node, moduleName) {
  if (
    node.init.type === "CallExpression" &&
    node.init.callee.type === "Identifier" &&
    node.init.callee.name === "require" &&
    Array.isArray(node.init.arguments) &&
    node.init.arguments[0].value === moduleName
  ) {
    return true;
  } else {
    return false;
  }
}

// When the initial node is a VariableDeclarator:
// Determine if we are assigning an object of a specific name.
function variableDeclarator_objectAssign(node, objectName) {
  let assignsName = false;

  if (node.id.type === "ObjectPattern" && Array.isArray(node.id.properties)) {
    for (let i = 0; i < node.id.properties.length; i++) {
      if (
        node.id.properties[i].type === "Property" &&
        node.id.properties[i].value.type === "Identifier" &&
        node.id.properties[i].value.name === objectName
      ) {
        assignsName = true;
      }
    }
  }

  return assignsName;
}

module.exports = {
  variableDeclarator_requireModule,
  variableDeclarator_objectAssign,
};
