const data = {
    name: "shubham",
    age: 22,
    channel: 'shubhm channel',
    degree: 'BE',
}

// const jsondata = JSON.stringify(data)
// console.log(jsondata)

// const objdata = JSON.parse(jsondata)
// console.log(objdata.name)



// exercise for file handling using JSON *****************
const fs = require('fs')

const jsondata = JSON.stringify(data)
// fs.writeFile('json1.json', jsondata, (err) => {
//     console.log('add file sucessfully')
// })

fs.readFile("json1.json", 'utf-8', (err, data)=>{
    const objdata = JSON.parse(data)

    console.log(data)
    console.log(objdata)
})








