var q = require('q');
var defer = q.defer();

// create a promise
defer.promise.then(console.log);

// resolve it
setTimeout(defer.resolve("RESOLVED!"), 300);
