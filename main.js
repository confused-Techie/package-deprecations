const { ESLint } = require("eslint");
const jsPlugin = require("./js/plugin.js");
const jsonPlugin = require("./json/plugin.js");

const jsRuleConfig = require("./js/ruleConfig.js");
const jsonRuleConfig = require("./json/ruleConfig.js");


(async () => {

  // Create ESLint instance
  const eslint = new ESLint({
    fix: false,
    overrideConfigFile: true,
    overrideConfig: [
      {
        // Global Config
        ignores: ["node_modules/**", "package-lock.json"],
        linterOptions: {
          reportUnusedDisableDirectives: "off",
          //noInlineConfig: true
        }
      },
      {
        // JavaScript Config
        files: ["*.js"],
        languageOptions: {
          ecmaVersion: "latest",
          sourceType: "commonjs"
        },
        plugins: {
          "js": jsPlugin
        },
        rules: jsRuleConfig
      },
      {
        // JSON Config
        files: ["*.json"],
        languageOptions: {
          parser: require("jsonc-eslint-parser")
        },
        plugins: {
          "json": jsonPlugin
        },
        rules: jsonRuleConfig
      },
      {
        // CoffeeScript Config
        files: ["*.coffee"],
        languageOptions: {
          parser: require("@fellow/eslint-plugin-coffee")
        },
        rules: jsRuleConfig
      }
    ]
  });

  // Lint Files
  const location = `${process.cwd()}/**/*`;
  const results = await eslint.lintFiles([location]);

  // Format Results
  const formatter = await eslint.loadFormatter(`${__dirname}/formatter.js`);
  const resultText = formatter.format(results);

  // Output
  console.log(resultText);

})().catch((err) => {

  process.exitCode = 1;
  console.error(err);

});
