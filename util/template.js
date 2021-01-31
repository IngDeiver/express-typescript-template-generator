const ejs = require("ejs")

function render(content, data) {
    return ejs.render(content, data);
}

module.exports = {
    render
}