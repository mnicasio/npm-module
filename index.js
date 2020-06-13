const axios = require("axios")
const dataStore = require("./lib/data-store")
const chalk = require("chalk")

console.log(chalk.yellow("...fetching data"))

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
        dataStore(res.data, "post")
        console.log(chalk.green("...data successfully saved"))
    })
    .catch(e => console.log(e))