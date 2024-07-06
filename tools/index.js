// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const q1 = {type: 'input', message: "Please, input project title:", name: 'title'};
const q2 = {type: 'input', message: "Enter a description of your project:", name: 'description'};
const q3 = {type: 'input', message: "Enter installation procedures:", name: 'installation'};
const q4 = {type: 'input', message: "Enter usage instructions for your project:", name: 'usage'};
const q5 = {type: 'input', message: "Enter testing instructions for your project:", name: 'testing'};
const q6 = {type: 'list', message: "Specify the license your project is going to be under:", choices: ["MIT", "Apache", "Mozilla", "IBM", "Eclipse", "None"], name: 'license'};
const q7 = {type: 'input', message: "Enter contribution specifications for your project:", name: 'contributions'};
const q8 = {type: 'input', message: "Provide GitHub username:", name: 'username'};
const q9 = {type: 'input', message: "Provide email address:", name: 'email'};
const questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName} README.md`, markdown.generateMarkdown(data), () => {
        console.log("File created.")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answer) => writeToFile(answer.title, answer));
}

// Function call to initialize app
module.exports = {init};
