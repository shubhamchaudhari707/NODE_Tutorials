const express = require('express')
const app = express()
const path = require("path")

// console.log(__dirname)
// console.log(path.join(__dirname,'../public'))
let staticpath = path.join(__dirname, "../public")
app.use(express.static(staticpath))

app.get("/", (req, res) => {
    res.send("<h1>hello world shubham home</h1>")
})
app.get("/about", (req, res) => {
    res.status(200).send("<h1>hello world shubham About</h1>")
})
app.get("/contact", (req, res) => {
    res.write("<h1>hello world Contact</h1>")
    res.write("<h1>hello world Contact</h1>")
    res.send()
})

app.get("/temp", (req, res) => {
    res.json([
        {
            id: 1,
            name: "shubham"
        },
        {
            id: 1,
            name: "shubham"
        },
        {
            id: 1,
            name: "shubham"
        },
    ])
})

app.listen(3000, () => {
    console.log("server is running 3000")
})

