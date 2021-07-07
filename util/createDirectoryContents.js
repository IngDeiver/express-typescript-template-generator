const fs = require("fs");
const path = require("path");
const template = require("./template");
const ignoreFeature = require('./ignoreFeature')


module.exports = function createDirectoryContents(
  templatePath,
  pathDirectoryTocreateContent,
  PACKGE_JSON_PROPERTIES_VALUES,
  CURRENT_DIR
) {
  const filesToCreate = fs.readdirSync(templatePath);
  const basePatch = path.join(CURRENT_DIR, pathDirectoryTocreateContent);

  filesToCreate.forEach((file) => {
    const origFilePath = path.join(templatePath, file);
    let writePath = `${basePatch}/${file}`;
    const SKIP_FILES = [
      "node_modules",
      ".env",
      ".env.dev",
      "README.md",
      ".git",
      "gitignorefile"
    ];
    
    // get stats about the current file
    const stats = fs.statSync(origFilePath);

    //ignore files
    if (SKIP_FILES.indexOf(file) > -1) return;

    // ignore features
    if(!PACKGE_JSON_PROPERTIES_VALUES.jsdoc){
      if(ignoreFeature(file, "jsdoc")) return;
    };

    
    if (stats.isFile()) { // copy files into directory
      // read file content and transform it using template engine
      let contents = fs.readFileSync(origFilePath, "utf8");
      // If the file is package.json apply the dinamyc properties
      if (file.includes("dinamic-package")) {
        contents = template.render(contents.toString(), {
          projectName: PACKGE_JSON_PROPERTIES_VALUES.projectName,
          author: PACKGE_JSON_PROPERTIES_VALUES.author,
          projectDescription: PACKGE_JSON_PROPERTIES_VALUES.projectDescription,
          license: PACKGE_JSON_PROPERTIES_VALUES.license,
          jsdoc: PACKGE_JSON_PROPERTIES_VALUES.jsdoc,
        });
        packeJsonFileName = "package.json";
        writePath = `${basePatch}/${packeJsonFileName}`;
      }
      fs.writeFileSync(writePath, contents, "utf8");

    } else if (stats.isDirectory()) { // create directory
      fs.mkdirSync(`${writePath}`);
      // recursive call
      createDirectoryContents(`${origFilePath}`, `${pathDirectoryTocreateContent}/${file}`,  PACKGE_JSON_PROPERTIES_VALUES, CURRENT_DIR);
    }
  });

  console.log(`Writing files into: ${basePatch}`);
};
