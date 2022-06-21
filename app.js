// TODO: Include packages needed for this application
let inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// const generateFile = require('');

// TODO: Create an array of questions for user input
function userInput() {
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
      default: true,
      validate: installInstructionsInput => {
        if(installInstructions) {
          return 'yes'
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'Select the license for this application.',
      choices: ["Academic Free License v3.0", "Apache license 2.0", "Artistic license 2.0", "Boost Software License 1.0", "BSD 2-clause license", "BSD 3-clause license", "Creative Commons Zero v1.0 Universal", "Creative Commons Attribution 4.0", "Creative Commons Attribution Share Alike 4.0", "Do What The Fuck You Want To Public License", "Educational Community License v2.0", "Eclipse Public License 1.0", "Eclipse Public License 2.0", "European Union Public License 1.1", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU General Public License v3.0",  "GNU Lesser General Public License v2.1", "GNU Lesser General Public License v3.0", "ISC", "LaTeX Project Public License v1.3c", "Microsoft Public License",  "MIT", "Mozilla Public License 2.0", "Open Software License 3.0", "SIL Open Font License 1.1", "University of Illinois/NCSA Open Source License", "The Unlicense", "zLib License"]
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'How can other users make contributions to this project?'
    },
    {
      type: 'input',
      name: 'test',
      message: 'How can other users test this application?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your Github username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
    {
      type: 'input',
      name: 'markdownTitle',
      message: 'What title should I give this file?'
    }
  ])
  .then(response => {
  console.log(response)
  })
};

// TODO: Create a function to write README file
function writeToFile(markdownTitle,  data) {
  fs.appendFile(`${fileName}.md`, data,
  (err) => console.log(err) || console.log(`Oh, the sweet, sweet smell of success! ${fileName}.md has been created!`)
  )
};

// TODO: Create a function to initialize app
async function init() {
  var answers = await userInput();
  writeToFile((answers.fileName), (generateMarkdown(answers)));
 };
;
// Function call to initialize app
init();
