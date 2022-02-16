// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'title',
        message:'What is the project name?',
    },
    {
        type: 'input',
        name: 'description',
        message:'Please give a brief description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message:'How are going to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message:'What do you plan to do with this project?', 
    },
    {
        type: 'input',
        name: 'contribution',
        message:'What are the criteria to contribute for this project?', 
    },
    {
        type: 'input',
        name: 'testing',
        message:'Please enter instructions here for running tests.', 
    },
    {
        type: 'list',
        name:'license',
        message:'What license do you want to use for this project?',
        choices: ['GPL 3.0', 'MIT', 'APACHE 2.0', 'None']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Congrats! Your README has been made!')
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        writeToFile("README.md", generateMarkdown(response));
    });
}

// Function call to initialize app
init();