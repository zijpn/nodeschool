var q = require('q');
var defer = q.defer();

function printError(error) {
  console.log(error.message);
}

// create promise
defer.promise.then(console.log, printError);

// reject it
setTimeout(defer.reject, 300, new Error("REJECTED!"));
