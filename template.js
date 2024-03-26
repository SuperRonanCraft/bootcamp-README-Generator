function createReadme({
  title,
  descrition,
  install,
  usage,
  contribute,
  license,
  tests,
  question,
}) {
  return `# ${title}

        ## Description
        
        ${descrition}
        
        ## Table of Contents
        
        - [](#)
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

        ${question}
        `;
}
module.exports = { createReadme };
