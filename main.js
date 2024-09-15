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
          "js/rename-atom.workspace-changeFocus": "error",
          "js/no-atom.showSaveDialogSync": "warn",
          "js/no-promise.done": "warn",
          "js/no-dock.getActiveTextEditor": "warn",
          "js/useString-path.dirname": "warn",
          "js/no-atom.workspace.paneContainer": "warn",
          "js/modify-atom.views.addViewProvider-argumentsLength": "warn",
          "js/useString-path.extname": "warn",
          "js/useStrings-path.basename": "warn",
          "js/no-electron.ipcRenderer.sendChannel": "warn",
          "js/no-electron.remote.require-Module": "warn",
          "js/no-require.deprecatedModules": "warn",
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
