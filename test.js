const { View, $ } = require("atom");

atom.config.unobserve("dothing", (value) => {
  doThing();
});

atom.workspace.openSync("urivalue", {
  pointlessOpt: "val",
  changeFocus: true,
  morePointlessOpt: "val"
});

workspace.openSync("urivalue", {
  changeFocus: true
});

atom.openURIInPane("uri", pane, {
  changeFocus: true
});
