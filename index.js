const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
// const figlet = require('figlet')

const server = http.createServer((req, res) => {
  //get the path of the page requested
  const page = url.parse(req.url).pathname;
  // get the parameters inside the query
  const params = querystring.parse(url.parse(req.url).query);

  // respond according to the page requested
  if (page == '/') {
    fs.readFile('public/index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/decide') {
    // if both options probided then choose one randomly
    if('option1' in params && 'option2' in params){
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: (Math.random() < 0.5)? params['option1'] : params['option2']
        }
        res.end(JSON.stringify(objToJson));
    } else {
        //if any or both options missing return the only parameter or a default message
        res.writeHead(200, {'Content-Type': 'application/json'});
        const objToJson = {
          result: ('option1' in params)? params['option1'] : 
                  ('option2' in params)? params['option2'] :
                  'NO OPTIONS PROVIDED'
        }
        res.end(JSON.stringify(objToJson));
    }
  }
  else if (page == '/public/style.css'){
    fs.readFile('public/style.css', function(err, data) {
      res.write(data);
      res.end();
    });
  }else if (page == '/public/main.js'){
    fs.readFile('public/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    res.writeHead(200, {'Content-Type': 'text/html'});
      res.write('ERROR 404');
      res.end();
  }
});

server.listen(8000);
