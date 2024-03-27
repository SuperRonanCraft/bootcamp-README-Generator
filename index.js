// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { generateMarkdown } = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = require("./utils/questions.js");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, () => {
    console.log(`File ${fileName} was saved with data!`);
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log(
    "Welcome to your personal README Generator!\nPlease answer the following questions...\n"
  );
  inquirer.prompt(questions).then((resp) => {
    const readme = generateMarkdown(resp);
    writeToFile("README.md", readme);
  });
}

// Function call to initialize app
init();
