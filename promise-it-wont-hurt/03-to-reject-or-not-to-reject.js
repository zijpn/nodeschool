var q = require('q');
var defer = q.defer();

// create promise
defer.promise.then(console.log, console.log);

// resolve
defer.resolve("I FIRED");
// should not log
defer.reject("I DID NOT FIRE");
