module.exports = [
  {
    type: "input",
    message: "Please enter your README's Title:",
    name: "title",
  },
  { type: "input", message: "Description of this project:", name: "desc" },
  { type: "input", message: "Installation Instructions:", name: "install" },
  { type: "input", message: "Usage Information:", name: "usage" },
  { type: "input", message: "Contributions and Guidelines:", name: "guide" },
  {
    type: "input",
    message: "Any Test Instructions:",
    name: "instruction",
  },
  {
    type: "list",
    message: "Choose a License:",
    name: "license",
    choices: require("./license.js"),
  },
];
