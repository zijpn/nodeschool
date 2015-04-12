var through = require('through2');

function write(buffer, encoding, next) {
  this.push(buffer.toString().toUpperCase());
  next();
}

function end (done) {
  done();
}

var transform = through(write, end);

process.stdin.pipe(transform).pipe(process.stdout);
