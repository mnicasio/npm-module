const fs = require("fs")

function dataStore(data, fileName) {
    fs.writeFileSync(`${__dirname}/../data/${fileName}.json`, JSON.stringify(data, null, 4))
}

module.exports = dataStore