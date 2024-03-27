// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(
  {
    title,
    description,
    install,
    usage,
    contribute,
    license,
    tests,
    github,
    email,
  },
  badge
) {
  return `# ${title}

${badge}  

## Description

${description}  


## Table of Contents
  - [Description](#description)
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

${contribute}

## License

${license}

## Tests

${tests}

## Questions?

View my [GitHub](https://github.com/${github}) profile  
Feel free to contact me via email at ${email} with additional questions
`;
}

module.exports = generateMarkdown;
