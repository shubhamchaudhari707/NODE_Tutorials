var http = require('http');


var server = http.createServer(function (req, res) {
    // console.log(req.url)
    // res.end(`<html><body> <h1>This is home Page.</h1> </body></html>`)

    if (req.url == '/') {
        res.end(`<h1>This is home Page.</h1> `)
    }
    else if (req.url == '/about') {
        res.end(`<h1>This is About Us Page.</h1>`)
    }
    else if (req.url == '/contact') {
        res.end(`<h1>This is Contact Us Page.</h1>`)
    }
    else {
        res.writeHead(404)
        res.end(`<h1> 404 error page. <h1> `)
    }

});

server.listen(5000, () => {
    console.log('server is running 5000')
})