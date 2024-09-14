const { ESLint } = require("eslint");
const jsPlugin = require("./js/plugin.js");
const jsonPlugin = require("./json/plugin.js");


(async () => {

  // Create ESLint instance
  const eslint = new ESLint({
    fix: false,
    overrideConfigFile: true,
    overrideConfig: [
      {
        // Global Config
        ignores: ["node_modules/**", "package-lock.json"]
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
        rules: {
          "js/no-atom.config.unobserve": "error",
          "js/no-require-view": "error",
          "js/no-require-editorView": "error",
          "js/no-require-scrollView": "error",
          "js/no-require-selectListView": "error",
          "js/no-require-textEditorView": "error",
          "js/no-require-dollarSign": "error",
          "js/no-require-doubleDollarSign": "error",
          "js/no-require-tripleDollarSign": "error",
          "js/no-atom.services": "error",
          "js/no-atom.workspaceView": "error",
          "js/no-atom.syntax": "error",
          "js/no-atom.registerRepresentationClass": "error",
          "js/no-atom.registerRepresentationClasses": "error",
          "js/rename-atom.workspace-changeFocus": "error"
        }
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
        rules: {
          "json/no-activationEvents": "error"
        }
      }
    ]
  });

  // Lint Files
  const results = await eslint.lintFiles(["./**/*"]);

  // Format Results
  const formatter = await eslint.loadFormatter("stylish");
  const resultText = formatter.format(results);

  // Output
  console.log(resultText);

})().catch((err) => {

  process.exitCode = 1;
  console.error(err);

});
