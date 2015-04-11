var mymodule = require('./06-module');

mymodule(process.argv[2], process.argv[3], function(err, files) {
  if (err) {
    return console.error(err);
  }
  for (var i = 0 ; i < files.length ; i++) {
    console.log(files[i]);
  }
});
