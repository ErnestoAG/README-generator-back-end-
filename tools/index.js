// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const q1 = {type: 'input', q: "Please, input project title:", name: 'title'};
const q2 = {type: 'input', q: "Enter a description of your project:", name: 'description'};
const q3 = {type: 'input', q: "Enter installation procedures:", name: 'installation'};
const q4 = {type: 'input', q: "Enter usage instructions for your project:", name: 'usage'};
const q5 = {type: 'list', q: "Specify the license your project is going to be under:", name: 'license'};
const q6 = {type: 'input', q: "Enter contributors of your project:", name: 'contributors'};
const q7 ={type: 'input', q: "Provide contact and directions for Questions section", name: 'questions'};
const questions = [q1, q2, q3, q4, q5, q6, q7];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.txt`, generateMarkdown(data), () => {
        console.log("File created.")
    });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
