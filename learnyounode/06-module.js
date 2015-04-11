var fs = require('fs');
var path = require('path');

function filterls (dir, ext, cb) {
  fs.readdir(dir, function(err, files) {
    if (err) {
      return cb(err);
    }
    var list = files.filter(function(file) {
      return path.extname(file) === '.' + ext;
    });
    cb(null, list);
  });
}

module.exports = filterls;
