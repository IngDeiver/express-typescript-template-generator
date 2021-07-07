const fs = require('fs')
const gitIgnoreFileName = '.gitignore'
const path = require('path')

module.exports = function (CURRENT_DIR, projectName, templatePath) {
  const projectPath = path.join(CURRENT_DIR, projectName);
  const writeGitIgnorePath = `${projectPath}/${gitIgnoreFileName}`;

  const gitIgnoreFilePath = path.join(templatePath, gitIgnoreFileName);
  let gitignoreContent = fs.readFileSync(gitIgnoreFilePath, "utf8");

  fs.writeFileSync(writeGitIgnorePath, gitignoreContent.toString(), "utf8");
};
