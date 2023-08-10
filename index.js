// Import Files and packages
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

function writeToFile(fileName, answers) {
  
}

// Function to prompt questions
function initPrompt() {
  inquirer
  .prompt([
    {
      type: 'input',
      name: 'logoText',
      message: 'Enter 1-3 characters for logo text',
      // Makes sure characters are between 1-3 or return error
      validate: function(input){
        if(input.length > 3){
          return 'Logo text must me between 1-3 characters'
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'textColor',
      message: `Enter a color keyword (OR a hexadecimal number) for logo's text color`,
      validate: function(input){
        if(!input){
          return 'Required to type input'
        } else {
          return true;
        }
      }
    },
    {
     type: 'list',
      name: 'shape',
      message: 'Select a shape for your logo',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'input',
      name: 'shapesColor',
      message: `Enter a color keyword (OR a hexadecimal number) for logo's shape color`,
      validate: function(input){
        if(!input){
          return 'Required to type input'
        } else {
          return true;
        }
      }
    },
  ])
  .then((answers) => {
      writeToFile('./examples/logo.svg', answers);
  });
}

// Initialize App
initPrompt();