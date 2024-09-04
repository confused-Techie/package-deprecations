const path = require("node:path");
const fs = require("fs");

module.exports =
function run(itemPath) {
  return enumerate(itemPath);
}

function enumerate(dir) {
  if (fs.lstatSync(dir).isDirectory()) {
    let files = fs.readdirSync(dir);

    let jsonFiles = [];

    for (const file of files) {
      let target = path.join(dir, file);

      if (fs.lstatSync(target).isDirectory()) {
        let deepJsonFiles = enumerate(target);

        if (deepJsonFiles.length > 0) {
          jsonFiles = jsonFiles.concat(deepJsonFiles);
        }
      } else {
        if (path.parse(target).ext === ".json") {
          jsonFiles.push(target);
        }
      }
    }

    return jsonFiles;
  } else {
    if (path.parse(dir).ext === ".json") {
      return dir;
    } else {
      return;
    }
  }
}
