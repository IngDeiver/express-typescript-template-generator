module.exports = function (fileOrDirectory, feature) {
    return fileOrDirectory.toLowerCase().includes(feature.toLowerCase())
}