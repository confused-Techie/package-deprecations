/*
  Example Object:

  {
    name: "root",
    type: "directory",
    children: [
      {
        name: "dir1",
        type: "directory",
        children: [
          {
            name: "file1.txt",
            type: "file"
          },
          {
            name: "file2.txt",
            type: "file"
          }
        ]
      },
      {
        name: "dir2",
        type: "directory",
        children: []
      }
    ]
  }
*/

const fs = require("fs");
const path = require("node:path");

module.exports =
function run(itemPath) {
  return enumerate(itemPath);
}

function enumerate(dir) {

  if (fs.lstatSync(dir).isDirectory()) {
    let files = fs.readdirSync(dir);

    const obj = {
      name: path.parse(dir).base,
      type: "directory",
      children: []
    };

    for (const file of files) {
      let target = path.join(dir, file);

      if (fs.lstatSync(target).isDirectory()) {
        obj.children.push(enumerate(target));
      } else {
        obj.children.push({
          name: path.parse(target).base,
          type: "file"
        });
      }
    }

    return obj;
  } else {
    // this is a file
    return {
      name: path.parse(dir).base,
      type: "file"
    };
  }
}
