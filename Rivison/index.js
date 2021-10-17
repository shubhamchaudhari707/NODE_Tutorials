console.log("*********** welocme shubham back to node js ***********")

const fs = require("fs")

// fs.writeFileSync('read.txt', "welocme back to shubham rtijho ")

// fs.appendFileSync('read.txt', "how are you\n")

// const data = fs.readFileSync('read.txt', "utf8")
// console.log(data)

// fs.renameSync("read.txt", "reads.txt")

// fs.unlinkSync("reads.txt")


// using async

// fs.writeFile("read.txt", "welocme to my  channel ", (err)=>{
//     console.log(err)
//     console.log("opertion sucessful")
// } )

// fs.appendFile('read.txt', 'shubhamTech\n', ()=>{
//     console.log('add text sucess')
// })

// fs.readFile("read.txt", "utf8",(err, data)=>{
//     console.log(data)
// })

// fs.rename("read.txt", "reads.txt", ()=>{
//     console.log("rename file sucess")
// } )


// fs.unlink("reads.txt", ()=>{
//     console.log('sucess delte')
// }  )

// **********************************************************************

// path module
const path = require("path")

// console.log(path.dirname("D:/Node_Express_Js/NODE_JS/Rivison/index.js"))
// console.log(path.extname("D:/Node_Express_Js/NODE_JS/Rivison/index.js"))
// console.log(path.basename("D:/Node_Express_Js/NODE_JS/Rivison/index.js"))

const mypath = path.parse("D:/Node_Express_Js/NODE_JS/Rivison/index.js")

// console.log(mypath.dir)

// **************************************************************************
// import export

const { add, mul, sub, name, data } = require("./oper")


// console.log(add(10, 20))
// console.log(mul(10, 20))
// console.log(sub(100, 20))
// console.log(name)
// console.log(data.name)

// ***********************************************************************



let http = require('http')

const server = http.createServer(function (req, res) {
    if (req.url == "/") {
        res.end("<h1>hello world</h1>")
    }
    else if (req.url == "/about") {
        res.end("<h1>kjgkgkgkgk<h1/>")
    }
    else{
        res.writeHead(404)
       res.end("<h1>404not page fount</h1>")
    }
})


server.listen(5000, () => {
    console.log("server is running")
})

// **************************************************************************************************************

// json module

const data1 = {
    name: "shubham",
    age: 22,
    channel: 'shubhm channel',
    degree: 'BE',
}

const jsondata = JSON.stringify(data1)
const objdata = JSON.parse(jsondata)
console.log(jsondata)
console.log(objdata)


fs.readFile('json1.json',"utf8",(err, data)=>{
    let orgdata = JSON.parse(data)
    console.log(orgdata.name)
})



