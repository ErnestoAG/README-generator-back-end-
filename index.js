const inquirer = require('inquirer');
const init = require('./tools/index.js');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Press ENTER to continue...',
      name: 'enterKey'
    }
  ]).then((response) =>
    response.enterKey === ''
      ? init.init()
      : console.log("Please, press the enter key")
  );

