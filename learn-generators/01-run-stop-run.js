/* jshint esnext: true */

function *range(from, to) {
  var n = from;
  do {
    yield n++;
  } while(n <= to);
}

for (var r of range(5, 10)) {
  console.log( r );
}
// should print: 5, 6, 7, 8, 9, 10
