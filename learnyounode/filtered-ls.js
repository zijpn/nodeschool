var fs = require('fs');
var path = require('path');
var ext = '.' + process.argv[3];

fs.readdir(process.argv[2], function(err, data) {
  var list = data.filter(function(file) {
    return path.extname(file) === ext;
  });
  for (var i = 0 ; i < list.length ; i++) {
    console.log(list[i]);
  }
});
