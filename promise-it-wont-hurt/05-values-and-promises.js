var q = require('q');
var defer = q.defer();

function attachTitle() {
  return "DR. " + arguments[0];
}

defer.promise
.then(attachTitle)
.then(console.log);

defer.resolve("MANHATTAN");
