#!/usr/bin/env node
// dinamic package.json properties
var author = "";
var projectDescription = "";
var license = "";
var jsdoc = true;

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { exec } = require("child_process");

const CURRENT_DIR = process.cwd();
const QUESTIONS = require("./util/questions");
const createProjectDirectory = require("./util/createProjectDirectory");
const createDirectoryContents = require("./util/createDirectoryContents");
const createGitignore = require('./util/createGitignore')

console.log(`
 ______________________________     
/                            / \\              
|          Express          | ========== 🔥   
\\____________________________\\_/
 ______________________________                
/                            / \\      
|          TypeScript       | ========== 🔥  
\\____________________________\\_/             
 ______________________________                
/                            / \\      
|          Template         | ========== 🔥  
\\____________________________\\_/    
 ______________________________        
/                            / \\         
|          Generator        | ========== 🔥    
\\____________________________\\_/

`);

inquirer
  .prompt(QUESTIONS)
  .then((answers) => {
    const templateChoice = answers["template-choice"];

    // package.json dproperties
    const projectName = answers["project-name"].trim();
    author = answers["project-author"];
    projectDescription = answers["project-description"];
    license = answers["project-license"];
    jsdoc = answers["features"][0];

    const PACKGE_JSON_PROPERTIES_VALUES = {
      projectName,
      author,
      projectDescription,
      license,
      jsdoc,
    };

    const templatePath = path.join(__dirname, "templates", templateChoice);
    const targetPath = path.join(CURRENT_DIR, projectName);

    if (!createProjectDirectory(targetPath)) {
      return;
    }

    createDirectoryContents(
      templatePath,
      projectName, // first directory (root) to write content
      PACKGE_JSON_PROPERTIES_VALUES,
      CURRENT_DIR,
    );

    // create .gitignore file
    createGitignore(CURRENT_DIR, projectName, templatePath)

    console.log("Instalalling dependencies...");

    exec(
      `cd ${targetPath} && git init && npm install`,
      (error, stdout, stderr) => {
        if (error) {
          console.log(chalk.red(`😭 error: ${error}`));
        }
        console.log(chalk.bold.green(`🚀 Project created in: ${targetPath}`));
        console.log(chalk.bold.green(`If it was helpful, leave a star ⭐️`));
        console.log("");

        console.log(
          chalk.yellow(
            "/--------------------------------------------------------------------/"
          )
        );
        console.log(
          chalk.yellow(
            "/           Follow the steps below to start development              /"
          )
        );
        console.log(
          chalk.yellow(
            "/                                                                    /"
          )
        );
        console.log(chalk.yellow(`/ cd ${projectName}`));
        console.log(
          chalk.yellow(
            "/ configure your .env file with the necessary environment variables. /"
          )
        );
        console.log(
          chalk.yellow(
            "/ npm run tsc: for execute ts compiler in mode watch.                /"
          )
        );
        console.log(
          chalk.yellow(
            "/ npm run dev: for start the development server.                     /"
          )
        );
        console.log(
          chalk.yellow(
            "/ npm run test: for test the project.                                /"
          )
        );
        console.log(
          chalk.yellow(
            "/ Open the browser in: http://localhost:3000/api/example             /"
          )
        );
        console.log(
          chalk.yellow(
            "/--------------------------------------------------------------------/"
          )
        );
      }
    );
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(
        chalk.red(
          "😭 Prompt could do not be rendered in the current environment"
        )
      );
    } else {
      console.log(chalk.red(`😭 ${error}`));
    }
  });
