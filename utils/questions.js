//All the questions to ask user
module.exports = [
  //Project Title
  {
    type: "input",
    message: "Please enter your README's Title:",
    name: "title",
  },
  //Description
  {
    type: "input",
    message: "Description of this project:",
    name: "description",
  },
  //Installation
  { type: "input", message: "Installation Instructions:", name: "install" },
  //Usage
  { type: "input", message: "Usage Information:", name: "usage" },
  //Contribution
  { type: "input", message: "Contributions and Guidelines:", name: "guide" },
  //Tests
  {
    type: "input",
    message: "Any Test Instructions:",
    name: "tests",
  },
  //License Type
  {
    type: "list",
    message: "Choose a License:",
    name: "license",
    choices: [
      "MIT",
      "Apache 2.0",
      "Boost",
      "Creative Commons - Attribution",
      "The Unlicense",
      "None",
    ],
  },
  //Github username
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  //Email
  {
    type: "input",
    message: "What is your Email?",
    name: "email",
  },
];
