function createReadme(
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

module.exports = { createReadme };
