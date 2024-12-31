const fs = require('fs').promises;

module.exports = (pathFile) => {
    return fs.readFile(pathFile, 'utf8');
}