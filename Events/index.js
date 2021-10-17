const EventEmitter = require('events')
const event = new EventEmitter()



event.on('myfunc', (sc, msg) => {
    console.log(`my name is shubham and status code is ${sc} and page is ${msg}`)
})




event.emit('myfunc', 200, 'ok')