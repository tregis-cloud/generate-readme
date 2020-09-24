const inquirer = require("inquirer");

// function to generate markdown for README
function generateMarkdown(data) {
  var key = Object.keys(data);
  return `# ${data.projectName}
![](https://img.shields.io/badge/Lincense-${data.license}-green)  
${data.projectDescription}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Lincense](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)
## Installation
${data.installation}
## Usage
${data.usage}
![](${data.images})
## Credits
${data.credits}
## License
${data.license}
## Contributing
${data.contributing}
## Test
${data.tests}
## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
