var http = require('http');
var through = require('through2');

function write (buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
}

function end(done) {
  done();
}

var server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  if (req.method === 'POST') {
    req.pipe(through(write, end)).pipe(res);
  }
  else {
    res.end('need a POST\n');
  }
});
server.listen(process.argv[2]);
