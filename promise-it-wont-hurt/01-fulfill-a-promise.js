var q = require('q');
var defer = q.defer();


defer.promise.then(console.log);
setTimeout(defer.resolve("RESOLVED!"), 300);

return defer.promise;
