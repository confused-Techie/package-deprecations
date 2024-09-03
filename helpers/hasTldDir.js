
module.exports =
function hasTldDir(dirObj, dirName) {
  // Find the directory name in a top level directory
  for (let i = 0; i < dirObj.children.length; i++) {
    if (dirObj.children[i].name === dirName && dirObj.children[i].type === "directory") {
      return true;
    }
  }

  return false;
}
