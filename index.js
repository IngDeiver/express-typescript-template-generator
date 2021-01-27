#!/usr/bin/env node

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { exec } = require("child_process");

const CURRENT_DIR = process.cwd();
const CHOICES = fs.readdirSync(path.join(__dirname, "templates"));

const QUESTIONS = [
  {
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
];

function createProjectDirectory(projectPath) {
  if (fs.existsSync(projectPath)) {
    console.log(
      chalk.red(`😭 Folder ${projectPath} exists. Delete or use another name.`)
    );
    return false;
  }

  fs.mkdirSync(projectPath);
  return true;
}

function createDirectoryContents(templatePath, newProjectPath) {
  const filesToCreate = fs.readdirSync(templatePath);
  const basePatch = path.join(CURRENT_DIR, newProjectPath);

  filesToCreate.forEach((file) => {
    const origFilePath = path.join(templatePath, file);
    const writePath = `${basePatch}/${file}`;
    const SKIP_FILES = ['node_modules', '.git', '.env', '.env.dev', 'README.md'];
    // get stats about the current file
    const stats = fs.statSync(origFilePath);

      //ignore files
      if (SKIP_FILES.indexOf(file) > -1) return;

      // copy files
      if (stats.isFile()) {
        const contents = fs.readFileSync(origFilePath, "utf8");

        // Rename
        if (file === ".npmignore") file = ".gitignore";
        fs.writeFileSync(writePath, contents, "utf8");
      } else if (stats.isDirectory()) {
        fs.mkdirSync(`${writePath}`);
        // recursive call
        createDirectoryContents(`${origFilePath}`, `${newProjectPath}/${file}`);
      }
  });

  console.log(`Writing files into: ${basePatch}`);
}

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
    const projectName = answers["project-name"].trim();

    const templatePath = path.join(__dirname, "templates", templateChoice);
    const tartgetPath = path.join(CURRENT_DIR, projectName);

    if (!createProjectDirectory(tartgetPath)) {
      return;
    }

    createDirectoryContents(templatePath, projectName);
    console.log("Instalalling dependencies...");

    exec(`cd ${tartgetPath} && git init && npm install`, (error, stdout, stderr) => {
      if (error) {
        console.log(chalk.red(`😭 error: ${error}`));
        return;
      } else {
        console.log(chalk.bold.green(`🚀 Project created in: ${tartgetPath}`));
        console.log(chalk.bold.green(  `If it was helpful, leave a star ⭐️: https://github.com/IngDeiver/node-ts-template`));
        console.log("");

        console.log(chalk.yellow("/--------------------------------------------------------------------/"));
        console.log(chalk.yellow("/           Follow the steps below to start development              /"));
        console.log(chalk.yellow("/                                                                    /"));
        console.log(chalk.yellow(`/ cd ${projectName}`));
        console.log(chalk.yellow("/ configure your .env file with the necessary environment variables. /"));
        console.log(chalk.yellow("/ npm run tsc: for execute ts compiler in mode watch.                /"));
        console.log(chalk.yellow("/ npm run dev: for start the development server.                     /"));
        console.log(chalk.yellow("/ npm run test: for test the project.                                /"));
        console.log(chalk.yellow("/ Open the browser in: http://localhost:3000/api/example             /"));
        console.log(chalk.yellow("/--------------------------------------------------------------------/"));
      }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(
        chalk.red("😭 Prompt could do not be rendered in the current environment"
        )
      );
    } else {
      console.log(chalk.red(`😭 ${error}`));
    }
  });
