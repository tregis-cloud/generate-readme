var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      name: "projectName",
      message: "Please enter project name: ",
    },
    {
      type: "input",
      name: "projectDescription",
      message: "Please enter project description: ",
    },
    {
      type: "input",
      name: "installation",
      message: "What steps are required to install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use this product?",
    },
    {
      type: "input",
      name: "credits",
      message:
        "List all those who collaborated with you on this project including third party assets.",
    },
    {
      type: "input",
      name: "license",
      message: "Please list ant license restrictions",
    },
    {
      type: "input",
      name: "badges",
      message: "Please list any badges.",
    },
    {
      type: "input",
      name: "contributing",
      message: "Please list any badges.",
    },
    {
      type: "input",
      name: "tests",
      message: "Do you have any tests?",
    },
  ])
  .then(function (response) {
    fs.writeFile("README.md", generateMarkdown(response), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    });
  });
