
module.exports =
function formatter(results, context) {
  let output = "";
  let totalErrors = 0;
  let totalWarnings = 0;

  results = purgeUnwantedResults(results);

  for (let i = 0; i < results.length; i++) {
    let result = results[i];

    if (result.errorCount > 0 || result.warningCount > 0) {
      totalErrors += result.errorCount;
      totalWarnings += result.warningCount;

      output += underline(result.filePath);
      output += `\n`;

      for (let y = 0; y < result.messages.length; y++) {
        let message = result.messages[y];

        output += `\t${gray(`${message.line}:${message.column}`)} [${gray(message.ruleId)}] ${handleSeverity(message.severity)} '${message.message}'`;
      }

      output += `\n\n`;
    }

  }

  output += `${totalErrors + totalWarnings} problems (${totalErrors} errors, ${totalWarnings} warnings)\n`;

  return output;
}

/*
FILEPATH
  LINE:COLUMN severity MESSAGE
*/

function handleSeverity(severity) {
  if (severity === 0) {
    // off : this shouldn't happen
    return "off";
  } else if (severity === 1) {
    // warn
    return yellow("warning");
  } else if (severity === 2) {
    // error
    return red("error");
  }
}

function underline(str) {
  return `\x1b[4m${str}\x1b[0m`;
}

function gray(str) {
  return `\x1b[90m${str}\x1b[0m`;
}

function red(str) {
  return `\x1b[31m${str}\x1b[0m`;
}

function yellow(str) {
  return `\x1b[33m${str}\x1b[0m`;
}

function purgeUnwantedResults(results) {
  // This function will take a full results object, and purge records we don't care about
  // This is needed because ESlint has limited controls on not listing errors
  // generated from packages attempting to inject eslint behavior into their files.
  // Which we always want to ignore when running our checks here
  let newResults = [];

  for (let i = 0; i < results.length; i++) {
    let tmpResult = {
      filePath: results[i].filePath,
      messages: [],
      errorCount: results[i].errorCount,
      warningCount: results[i].warningCount,
      fixableErrorCount: results[i].fixableErrorCount,
      fixableWarningCount: results[i].fixableWarningCount,
      source: results[i].source
    };

    for (let y = 0; y < results[i].messages.length; y++) {
      let message = results[i].messages[y];
      let includeMessage = true;

      if (message.message.match(/Definition for rule '.+' was not found\./)) {
        includeMessage = false;
      }

      if (includeMessage) {
        tmpResult.messages.push(message);
      } else {
        // remove the counts for the message we are excluding
        if (message.severity === 2) {
          tmpResult.errorCount--;
        } else if (message.severity === 1) {
          tmpResult.warningCount--;
        }
      }
    }

    newResults.push(tmpResult);
  }

  return newResults;
}
