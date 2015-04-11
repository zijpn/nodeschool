var http = require('http');

var done = 0;
var results = [];

function print_result() {
  for (var i=0; i<3; i++) {
    console.log(results[i]);
  }
}

function http_get(index) {
  http.get(process.argv[index+2], function(res){
    res.setEncoding('utf8');
    res.on('data', function(data) {
      results[index] += data;
    });
    res.on('end', function() {
      done++;
      if (done === 3) {
        print_result();
      }
    });
  });
}

for (var i=0; i<3; i++) {
  results[i] = '';
  http_get(i);
}
