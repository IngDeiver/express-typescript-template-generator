#!/usr/bin/env node

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { exec } = require("child_process");
const template = require('./util/template')

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
];

var author = ""
var projectDescription = ""
var license = ""

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

function createDirectoryContents(templatePath, projectName) {
  const filesToCreate = fs.readdirSync(templatePath);
  const basePatch = path.join(CURRENT_DIR, projectName);

  filesToCreate.forEach((file) => {
    const origFilePath = path.join(templatePath, file);
    const writePath = `${basePatch}/${file}`;
    const SKIP_FILES = ['node_modules', '.env', '.env.dev', 'README.md', '.git'];
    // get stats about the current file
    const stats = fs.statSync(origFilePath);

      //ignore files
      if (SKIP_FILES.indexOf(file) > -1) return;

      // copy files
      if (stats.isFile()) {
        // read file content and transform it using template engine
        let contents = fs.readFileSync(origFilePath, 'utf8');
        
        // If the file is package.json apply the dinamyc properties
        if(file.includes("package.json")) contents = template.render(contents, 
          { projectName, author, projectDescription, license});

        fs.writeFileSync(writePath, contents, "utf8");
      } else if (stats.isDirectory()) {
        fs.mkdirSync(`${writePath}`);
        // recursive call
        createDirectoryContents(`${origFilePath}`, `${projectName}/${file}`);
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
    author = answers["project-author"];
    projectDescription = answers["project-description"];
    license  = answers["project-license"];

    const templatePath = path.join(__dirname, "templates", templateChoice);
    const tartgetPath = path.join(CURRENT_DIR, projectName);

    if (!createProjectDirectory(tartgetPath)) {
      return;
    }

    createDirectoryContents(templatePath, projectName);

    // create .gitignore file
    const basePatch = path.join(CURRENT_DIR, projectName);
    const writePath = `${basePatch}/.gitignore`;
    const gitContent = `node_modules
dist
.env
.env.dev

# docs
jsdoc/docs
`
    fs.writeFileSync(writePath, gitContent, 'utf8')
    console.log("Instalalling dependencies...");

    exec(`cd ${tartgetPath} && git init && npm install`, (error, stdout, stderr) => {
      if (error) {
        console.log(chalk.red(`😭 error: ${error}`));
      }
        console.log(chalk.bold.green(`🚀 Project created in: ${tartgetPath}`));
        console.log(chalk.bold.green(  `If it was helpful, leave a star ⭐️`));
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
