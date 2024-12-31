const fs = require('fs').promises;

module.exports = (pathFile, dados, f) => {
    fs.writeFile(pathFile, dados, {flag: f, encoding: 'utf8'});
}