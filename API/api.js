const { json } = require('body-parser')
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  fs.readFile( 'userapi.json', 'utf-8', (err, data)=>{
    console.log(data)
    const objdata = JSON.parse(data)
    console.log(objdata)
    res.send(objdata)
  } )
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})