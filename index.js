const http = require('http')

http.createServer( (request, response)=>{
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write('Hello World!' /*CONTENT*/)
    response.end()
    }).listen(8000)
