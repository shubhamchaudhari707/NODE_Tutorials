console.log('sync vs async ')

const fs = require('fs')

// sync
// const data = fs.readFileSync('read.txt', 'utf8')
// console.log(data)
// console.log('good morniong ')


// async
fs.readFile('read.txt', 'utf8', (err, data) => {
    console.log(err)
    console.log(data)
})
console.log('after data')
