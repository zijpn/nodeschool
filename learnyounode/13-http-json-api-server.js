var http = require('http');
var url = require('url');

var server = http.createServer(function(req,res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  if (req.method === 'GET') {
    var u = url.parse(req.url, true); // second param = parseQueryString
    if (u.pathname === '/api/parsetime') {
      var d = new Date(u.query['iso']);
      var result = { "hour": d.getHours(),
                     "minute": d.getMinutes(),
                     "second": d.getSeconds() };
      res.write(JSON.stringify(result));
    }
    else if (u.pathname === '/api/unixtime') {
      var d = new Date(u.query['iso']);
      var result = { "unixtime": d.getTime() };
      res.write(JSON.stringify(result));
    }
  }
  res.end();
});
server.listen(process.argv[2]);
