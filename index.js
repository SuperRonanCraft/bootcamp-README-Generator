// TODO: Include packages needed for this application
//Dependencies
const fs = require("fs");
const inquirer = require("inquirer");
const { generateMarkdown } = require("./utils/generateMarkdown.js");

//Data
// TODO: Create an array of questions for user input
const questions = require("./utils/questions.js");

//Functions
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, () => {
    console.log(`File ${fileName} was saved with data!`);
  });
}

// TODO: Create a function to initialize app
function init() {
  //Introduction to app
  console.log(
    "Welcome to your personal README Generator!\nPlease answer the following questions...\n"
  );
  //Ask questions (User Interaction)
  inquirer.prompt(questions).then((resp) => {
    //Generate markdown string
    const readme = generateMarkdown(resp);
    //Save string to disk
    writeToFile("README.md", readme);
  });
}

// Function call to initialize app
init();
