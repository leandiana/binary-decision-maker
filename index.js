const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer( (request, response)=>{
    if(request.url === '/'){
        fs.readFile(
            path.join(__dirname, 'public', 'index.html'),
            (err, content)=>{
                if(err)throw err;
                response.writeHead(200, {'Content-Type': 'text/html'})
                response.end(content)
            }
            )
        
    }
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.write( (Math.random() > 0.5)? '1' : '0' /*CONTENT*/)
    response.end()
    }).listen(8000)
