var http = require('http');

var nchars = 0;
var collect = '';

http.get(process.argv[2], function(response){
  response.setEncoding('utf8');
  response.on('data', function(data) {
    nchars += data.length;
    collect += data;
  });
  response.on('end', function() {
    console.log(nchars);
    console.log(collect);
  });
});
