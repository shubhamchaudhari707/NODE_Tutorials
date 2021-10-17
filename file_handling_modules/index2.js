console.log('file handling operation using synchronus method')

// file handing using synchronous
const fs = require('fs')

// fs.writeFileSync("bio.txt", 'welocme to my channel2,')
// fs.appendFileSync("bio.txt", ' Hyllo to my channel 3')


// fs.renameSync("bio.txt", "mybio.txt")

const data = fs.readFileSync('mybio.txt', "utf8")
console.log(data)

// fs.unlinkSync('mybio.txt')










