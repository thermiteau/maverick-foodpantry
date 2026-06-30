/* eslint-disable no-console */
const { exec } = require('child_process');
const { exit } = require('process');

const filename = process.argv[2];
const prettierHtmlCommand = `prettier ${filename} --write --parser=html`;
const prettierJSCommand = `prettier ${filename} --write`;
const eSLintCommand = `eslint ${filename} --fix`;

const prettierHtml = exec(prettierHtmlCommand);

prettierHtml.stdout.on('data', (data) => {
  console.log(data);
});
prettierHtml.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
  exit(1);
});
prettierHtml.on('close', (code) => {
  if (code === 0) {
    const prettierJS = exec(prettierJSCommand);

    prettierJS.stdout.on('data', (data) => {
      console.log(data);
    });

    prettierJS.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
      exit(1);
    });

    prettierJS.on('close', (jscode) => {
      if (jscode === 0) {
        const esLint = exec(eSLintCommand);

        esLint.stdout.on('data', (data) => {
          console.log(data);
          console.log('Completed successfully');
        });

        esLint.stderr.on('data', (data) => {
          console.error(`stderr: ${data}`);
          exit(1);
        });
      }
    });
  }
});
