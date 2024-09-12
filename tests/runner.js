const GREEN = '\x1b[32m%s\x1b[0m';
const RED = '\x1b[31m%s\x1b[0m';

module.exports =
function runner(ruleTester, ruleName, ruleModule, ruleType) {

  try {
    const ruleObject = {
      valid: ruleModule?.test?.valid ?? [],
      invalid: ruleModule?.test?.invalid ?? []
    };

    if (ruleModule?.test?.filename) {
      ruleObject.name = ruleModule.test.filename;
    }

    ruleTester.run(
      `${ruleType}/${ruleName}`,
      ruleModule,
      ruleObject
    );

    console.log(GREEN, `Rule Passed: '${ruleType}/${ruleName}'`);
    return { failed: false };

  } catch(err) {
    console.error(RED, `Rule Failed: '${ruleType}/${ruleName}'`);
    console.error(err);
    return { failed: true };
  }
}
