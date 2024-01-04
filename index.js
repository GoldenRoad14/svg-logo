const inquirer = require('inquirer');
const fs = require('fs');
const w3Colors = require('./lib/colors');
const generateSVG = require('./lib/shapes');

function validateColor(input){
    const lowerCaseInput = input.toLowerCase();
    console.log('Lower Case Input: ', lowerCaseInput);

    const isValidColorName = w3Colors[lowerCaseInput];
    console.log('Is Valid Color name: ', isValidColorName);

    const isValidHexCode = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(lowerCaseInput);
    console.log('Is valid hex code:', isValidHexCode);

    return isValidColorName || isValidHexCode;
}

function userInput(){
    return inquirer.prompt([
        {
            type: 'input',
            name: 'initials',
            message: 'Please enter up to 3 characters for your logo: ',
            validate: (input) => {
                return input.length <= 3;
            },
        },
        {
            type: 'input',
            name: 'initialsColor',
            message: 'What color do you want the text to be? ',
            validate: (input) => {
                return validateColor(input) || 'Please enter a valid color name or hexadecimal code.';
              },
        },
        {
            type: 'list',
            name: 'fontType',
            message: 'Which style font do you want to use?',
            choices: [
              'Serif',
              'Sans-Serif',
              'Scripty',
              'Monospace'
            ]
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose background shape option:',
            choices: [
              'Circle',
              'Triangle',
              'Square',
            ]
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color do you want the background shape to be? ',
            validate: (input) => {
                return validateColor(input) || 'Please enter a valid color name or hexadecimal code.';
              }
        }
        
    ])
}

function startApp() {
    userInput().then((userInput) => {
      const { generateSVG } = require('./lib/shapes');
      const svgCode = generateSVG(userInput);
      const fileName = `examples/${userInput.initials}_logo.svg`;
      fs.writeFileSync(fileName, svgCode);
  
      // Print success message
      console.log(`Generated ${fileName}`);
    });
  }
  
  // Start the application
  startApp();