const inquirer = require("inquirer");

// function to generate markdown for README
function generateMarkdown(data) {
  var key = Object.keys(data);
  return `## ${data.projectName}
## ${data.projectDescription}
## ${data.installation}
## ${data.usage}
## ${data.credits}
## ${data.license}
## ${data.badges}
## ${data.contributing}
## ${data.tests}

  `;
}

module.exports = generateMarkdown;
