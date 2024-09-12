const { RuleTester } = require("eslint");
const runner = require("./runner.js");
const jsRules = require("../js/plugin.js");
const jsonRules = require("../json/plugin.js");

const results = {
  numberPassed: 0,
  numberFailed: 0,
  failedList: []
};

const ruleTesterJS = new RuleTester({
  languageOptions: {
    ecmaVersion: "latest"
  }
});

for (const rule in jsRules.rules) {
  const result = runner(ruleTesterJS, rule, jsRules.rules[rule], "js");

  if (result.failed) {
    results.numberFailed++;
    results.failedList.push(`js/${rule}`);
  } else {
    results.numberPassed++;
  }
}

const ruleTesterJSON = new RuleTester({
  languageOptions: {
    parser: require("jsonc-eslint-parser")
  }
});

for (const rule in jsonRules.rules) {
  const result = runner(ruleTesterJSON, rule, jsonRules.rules[rule], "json");

  if (result.failed) {
    results.numberFailed++;
    results.failedList.push(`json/${rule}`);
  } else {
    results.numberPassed++;
  }
}

const GREEN = '\x1b[32m%s\x1b[0m';
const RED = '\x1b[31m%s\x1b[0m';

console.log(GREEN, `Tests Passed: '${results.numberPassed}'`);
console.log(RED, `Tests Failed: '${results.numberFailed}'`);

if (results.numberFailed !== 0) {
  console.log(RED, "Tests that failed:");

  for (let i = 0; i < results.failedList.length; i++) {
    console.log(RED, results.failedList[i]);
  }

  process.exit(1);
} else {
  process.exit(0);
}
