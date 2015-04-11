var http = require('http');

var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
    var body = '';
    req.on('data', function(data) {
      body += data;
    });
    req.on('end', function(){
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(body.toUpperCase());
      res.end();
    });
  }
  else {
    res.end('need a POST\n');
  }
});
server.listen(process.argv[2]);
