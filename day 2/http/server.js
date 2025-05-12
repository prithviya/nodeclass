const fs = require ('fs');
const http = require ('http');
const path = require ('path');

const PORT = 8080;
 
const server = http.createServer((req,res) => {
    let filePath = './pages';
    let contentType = 'text/html';
    if(req.url === '/')
    {
        filePath += '/index.html';
    }
    else if(req.url === '/about')
    {
        filePath += '/about.html';
    }
    
    else
    {
        filePath += '/404.html';
        res.statusCode = 404;
    }
fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error');
    } else {
      res.writeHead(res.statusCode || 200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});