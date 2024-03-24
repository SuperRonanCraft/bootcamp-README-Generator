// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Please enter your README's Title:",
    name: "title",
  },
  { type: "input", message: "Description of this project:", name: "desc" },
  { type: "input", message: "Installation Instructions:", name: "desc" },
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
  fs.appendFile(fileName, `${data}\n`, () => {
    console.log(`File ${fileName} was saved with data!`);
  });
}

// TODO: Create a function to initialize app
function init() {
  const fileName = "READMETEST.md";
  //Clear file each time
  fs.writeFile(fileName, "", () => {});
  console.log(
    "Welcome to your personal README Generator!\nPlease answer the following questions...\n"
  );
  inquirer
    .prompt(questions)
    .then((response) =>
      console.log(`Your favorite color is ${response.title}!`)
    );
}

// Function call to initialize app
init();
