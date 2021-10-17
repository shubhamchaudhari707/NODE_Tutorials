const fs = require('fs')
const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {

    // fs.readFile('input.txt','utf-8', (err, data)=>{
    //     res.end(data)
    // })

    // another method

    const rstrem = fs.createReadStream('input.txt')

    // rstrem.on('data', (chunkdata)=>{
    //     res.write(chunkdata)
    // })
    // rstrem.on('end', ()=>{
    //     res.end()
    // })

    // one line of code
    rstrem.pipe(res)

})

server.listen(5000, () => {
    console.log('coonection sucessful')
})


