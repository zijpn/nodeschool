var through = require('through2');
var dup = require('duplexer2');

module.exports = function(counter) {
  var counts = {};
  function write(obj, _, next) {
    counts[obj.country] = (counts[obj.country] || 0) + 1;
    next();
  }
  function end(done) {
    counter.setCounts(counts);
    done();
  }
  // need object mode for through ...
  // https://nodejs.org/api/stream.html#stream_object_mode
  return dup(through.obj(write, end), counter);
}
