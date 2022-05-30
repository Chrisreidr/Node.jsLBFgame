const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  const readWrite = (file, contentType) => {
    fs.readFile(file, function(err, data) {
      res.writeHead(200, {'Content-Type': contentType});
      res.write(data);
      res.end();
    });
  }
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  switch (page) {
    case '/':
      readWrite('gameIndex.html','text/html')
      break;
    case '/css/gameStyle.css':
      fs.readFile('css/gameStyle.css', function(err, data) {
        res.write(data);
        res.end();
      });
      break;
    case '/js/gameMain.js':
      readWrite('js/gameMain.js', 'text/javascript')
      break;
    default:
      figlet('404!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.write(data);
        res.end();
      });
      break;
  }
});
server.listen(5000);