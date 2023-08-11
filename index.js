// Import Files and packages
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

// Function to write logo SVG file
function writeToFile(fileName, answers) {
  let shapeOption;
  let svgString = '';

  // If else to take user input and correspond the shape and color
  if (answers.shape === "Circle") {
    shapeOption = new Circle();
    svgString += `<circle cx="150" cy="100" r="80" fill="${answers.shapesColor}"/>`;
  } else if (answers.shape === "Square") {
    shapeOption = new Square();
    svgString += `<rect x="72" y="35" width="150" height="150" fill="${answers.shapesColor}"/>`;
  } else {
    shapeOption = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapesColor}"/>`;
  }

  // Create the content inside the logo.svg file
  const svgContent = `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    ${svgString}
    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.logoText}</text>
    
  </svg>`;

  fs.writeFile(fileName, svgContent, (err) => {
    err ? console.error(err) : console.log('Generated logo.svg');
  });
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