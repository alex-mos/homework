var http = require('http')

console.log('Server started')

var server = http.createServer(function(request, response) {
    console.log('request accepted')
    response.end('hello docker!!!')
})

server.listen(80)
