const { View, $ } = require("atom");

atom.config.unobserve("dothing", (value) => {
  doThing();
});
