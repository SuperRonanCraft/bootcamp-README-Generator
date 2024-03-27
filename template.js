const { getLicense } = require("./license");

function createReadme({
  title,
  description,
  install,
  usage,
  contribute,
  license,
  tests,
  question,
}) {
  return `# ${title}

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

${getLicense(license)}

## Tests

${tests}

## Questions?

${question}
`;
}

module.exports = { createReadme };
