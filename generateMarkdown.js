const inquirer = require("inquirer");

// function to generate markdown for README
function generateMarkdown(data) {
  var key = Object.keys(data);
  return `# ${data.projectName}
${data.projectDescription}
## Table of Contents
* [Installation](##Installation)
* [Usage](##Usage)
* [Credits](##Credits)
* [Lincense](##License)
* [Badges](##Badges)
* [Contributing](##Contributing)
* [Test](##Test)
## Installation
${data.installation}
## Usage
${data.usage}
![](${data.images}
## Credit
${data.credits}
## License
![](https://img.shields.io/badge/Lincense-${data.license}-green)

## Contributing
${data.contributing}
## Test
${data.tests}
## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
