module.exports = [
  {
    type: "input",
    message: "Please enter your README's Title:",
    name: "title",
  },
  {
    type: "input",
    message: "Description of this project:",
    name: "description",
  },
  { type: "input", message: "Installation Instructions:", name: "install" },
  { type: "input", message: "Usage Information:", name: "usage" },
  { type: "input", message: "Contributions and Guidelines:", name: "guide" },
  {
    type: "input",
    message: "Any Test Instructions:",
    name: "tests",
  },
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
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your Email?",
    name: "email",
  },
];
