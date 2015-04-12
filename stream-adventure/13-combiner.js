var combine = require('stream-combiner');
var split = require('split');
var through = require('through2');
var zlib = require('zlib');

module.exports = function() {
  var currentGenre;
  function write(line, _, next) {
    if (line.length === 0) return next();
    var row = JSON.parse(line);
    if (row.type === 'genre') {
      if (currentGenre) {
        this.push(JSON.stringify(currentGenre) + '\n')
      }
      currentGenre = { name: row.name, books: [] };
    }
    else if (row.type === 'book') {
      currentGenre.books.push(row.name);
    }
    next();
  }
  function end(done) {
    if (currentGenre) {
      this.push(JSON.stringify(currentGenre) + '\n');
    }
    done();
  }

  return combine(split(), through(write, end), zlib.createGzip());
}
