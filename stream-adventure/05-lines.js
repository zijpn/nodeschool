var through = require('through2');
var split = require('split');
var odd = true;

var transform = through(function(line, _, next) {
  if (odd)
    this.push(line.toString().toLowerCase() + '\n');
  else
    this.push(line.toString().toUpperCase() + '\n');
  odd = !odd;
  next();
});

process.stdin
  .pipe(split())
  .pipe(transform)
  .pipe(process.stdout);
