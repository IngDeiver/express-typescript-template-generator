const fs = require('fs')

module.exports = function createProjectDirectory(projectPath) {
    if (fs.existsSync(projectPath)) {
        console.log(
            chalk.red(`😭 Folder ${projectPath} exists. Delete or use another name.`)
        );
        return false;
    }

    fs.mkdirSync(projectPath);
    return true;
}