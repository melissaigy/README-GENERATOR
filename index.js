// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
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
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'What are the test instructions for your application?',
        name: 'test',
      },
      {
        type: 'list',
        message: 'What license would you like to use for your application?',
        name: 'license',
        choices: ['MIT', 'agpl', 'apache', 'no license'],
        default: 'MIT'
      },

  ]

// TODO: Create a function to write README file
// function writeToFile(filename, data) {}
const writeFile = content => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./newreadme/genREADME.md', content, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'Your README is ready!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then(readmeData => {
        return readmeData;
    })
}

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err => {
    console.log(err);
})

