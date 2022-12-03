// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is the best email to reach you regarding your application?',
        name: 'email',
      },
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Type a description of your application: ',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Type the installation instructions for your application: ',
      name: 'instructions',
    },
    {
        type: 'input',
        message: 'Type the usage information of your application: ',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What are the contribution guidelines of your application?',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'What are the test instructions for your application?',
        name: 'tests',
      },
      {
        type: 'list',
        message: 'What license would you like to use for your application?',
        name: 'license',
        choices: ['MIT', 'Mozzila Public License'],
        default: 'MIT'
      },

  ])
  .then((response) =>
    console.log(response)
  );

// TODO: Create a function to write README file
function writeToFile(Develop/New README/README, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
