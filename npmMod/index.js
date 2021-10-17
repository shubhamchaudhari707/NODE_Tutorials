const chalk = require("chalk")
var validator = require('validator');

// console.log(chalk.blue.bgRed.bold('Hello world'))
// console.log(chalk.green.inverse('success'))
// console.log(chalk.red.inverse('false'))


const res= validator.isEmail('shubhkjp@fwef.com');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res))



console.log(__dirname)
console.log(__filename)



