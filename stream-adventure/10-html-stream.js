var trumpet = require('trumpet');
var through = require('through2');
var tr = trumpet(); // NEED TO CREATE VAR!!

var loud = tr.select('.loud').createStream();

// piping back to loud is confusing ...
// cfr https://github.com/nodeschool/discussions/issues/346
loud.pipe(through(function(buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
})).pipe(loud);

process.stdin.pipe(tr).pipe(process.stdout);
