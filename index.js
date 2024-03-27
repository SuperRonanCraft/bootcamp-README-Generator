// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { createReadme } = require("./template.js");

// TODO: Create an array of questions for user input
const questions = require("./questions.js");

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
    const data = {
      title: "Title",
      description: "Desc",
      install: "install",
      usage: "usage..",
      contribute: "contribute",
      license: "license",
      tests: "tests",
      question: "questions",
    };
    const readme = createReadme(data);
    writeToFile("README.md", readme);
  });
}

// Function call to initialize app
init();
