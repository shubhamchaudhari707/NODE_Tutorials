const http = require('http');
const fs = require('fs');


const server = http.createServer(function (req, res) {

    if (req.url == '/') {
        res.end(`<h1>This is home Page.</h1> `)
    }
    else if (req.url == '/about') {
        res.end(`<h1>This is About Us Page.</h1>`)
    }
    else if (req.url == '/contact') {
        res.end(`<h1>This is Contact Us Page.</h1>`)
    }

    else if (req.url == '/userapi') {
        fs.readFile('userapi.json', 'utf-8', (err, data)=>{
            console.log(data)
            const objdata = JSON.parse(data)
            res.end(objdata[1].email)
        })
    }

    else {
        res.writeHead(404)
        res.end(`<h1> 404 error page. <h1> `)
    }

});

server.listen(5000, () => {
    console.log('server is running 5000')
})


