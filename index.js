// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { createReadme } = require("./template.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter your README's Title:",
    name: "title",
  },
  { type: "input", message: "Description of this project:", name: "desc" },
  { type: "input", message: "Installation Instructions:", name: "install" },
  { type: "input", message: "Usage Informatio:", name: "usage" },
  { type: "input", message: "Contributions and Guidelines:", name: "guide" },
  {
    type: "input",
    message: "Last but not least, Test Instructions:",
    name: "instruction",
  },
];

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
    const readme = createReadme(resp);
    writeToFile("README.md", data);
  });
}

// Function call to initialize app
init();
