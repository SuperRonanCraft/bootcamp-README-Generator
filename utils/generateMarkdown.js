// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const prefix = "[![License]";
  switch (license) {
    case "MIT":
      return `${prefix}(https://img.shields.io/badge/License-MIT-yellow.svg)](${getLicenseLink(
        license
      )})`;
    case "Apache 2.0":
      return `${prefix}(https://img.shields.io/badge/License-Apache%202.0-blue.svg)](${getLicenseLink(
        license
      )})`;
    case "Boost":
      return `${prefix}(https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](${getLicenseLink(
        license
      )})`;
    case "Creative Commons - Attribution":
      return `${prefix}(https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](${getLicenseLink(
        license
      )})`;
    case "The Unlicense":
      return `${prefix}(https://img.shields.io/badge/license-Unlicense-blue.svg)](${getLicenseLink(
        license
      )})`;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license !== "" ? `[License Link](${getLicenseLink(license)})` : "";
}

//Returns the link for a specific license (used in renderLicenseBadge and renderLicenseLink)
function getLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "Boost":
      return "https://www.boost.org/LICENSE_1_0.txt";
    case "Creative Commons - Attribution":
      return "https://creativecommons.org/licenses/by/4.0/";
    case "The Unlicense":
      return "http://unlicense.org/";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== "None"
    ? `This project is licensed under the ${license} License`
    : "This project has no license.";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(
  //Deconstruct the input object
  { title, description, install, usage, guide, license, tests, github, email }
) {
  return `# ${title}
${renderLicenseBadge(license)}  

## Description

${description}  

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#how-to-contribute)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation

${install}

## Usage

${usage}

## How to Contribute

${guide}

## License

${renderLicenseSection(license)}
${renderLicenseLink(license)}

## Tests
${tests}

## Questions?

View my [GitHub](https://github.com/${github}) profile  
Feel free to contact me via email at ${email} with additional questions
`;
}

//Exports the only necessary function
module.exports = { generateMarkdown };
