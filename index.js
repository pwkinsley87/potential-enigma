// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const userPrompts = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is the name of your project?(Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'about',
      message: 'Enter a brief description of your project(Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter some information about your project!');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'installInstructions',
      message: 'Would you like to include installation instructions?',
      default: true
    }
  ]);
};

// TODO: Create a function to write README file
function writeREADME() {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
