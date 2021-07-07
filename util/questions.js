const fs = require('fs')
const path = require('path')
const CHOICES = fs.readdirSync(path.join(__dirname, "../templates"));

module.exports = [{
  name: "template-choice",
  type: "list",
  message: "What template would you like to generate?",
  choices: CHOICES,
},
{
  name: "project-name",
  type: "input",
  default: "express-project",
  message: "Write a project name:",
  validate: function (input) {
    if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
    else
      return "Project name may only include letters, numbers, underscores and hashes.";
  },
},
{
  name: "project-author",
  type: "input",
  default: "Without author",
  message: "Author",
  validate: function (input) {
    if (/^([A-Za-z\-\_\ \d])+$/.test(input)) return true;
    else
      return "Author name may only include letters, numbers, underscores and hashes.";
  },
},
{
  name: "project-description",
  type: "input",
  default: "Without description",
  message: "Write a description"
},
{
  name: "project-license",
  type: "input",
  default: "ISC",
  message: "Write a license name:",
},
{
  name: "features",
  type: "checkbox",
  message: "Select features to use",
  choices: [{ name: "Jsdoc", checked: true, value: true }],
},
];