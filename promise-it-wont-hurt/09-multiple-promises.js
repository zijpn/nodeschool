var q = require('q');

var def1 = q.defer();
var def2 = q.defer();

function all(p1, p2) {
  var def = q.defer();
  var count = 0;
  var val1;
  var val2;

  p1
  .then(function(result) {
    val1 = result;
    ++count;
    if (count == 2) {
      def.resolve([val1, val2]);
    }
  })
  .then(null, def.reject)
  .done();

  p2
  .then(function(result) {
    val2 = result;
    ++count;
    if (count == 2) {
      def.resolve([val1, val2]);
    }
  })
  .then(null, def.reject)
  .done();

  return def.promise;
}

all(def1.promise, def2.promise)
.then(console.log)
.done();

setTimeout(function () {
  def1.resolve("PROMISES");
  def2.resolve("FTW");
}, 200);
