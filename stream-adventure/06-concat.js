var concat = require('concat-stream');

process.stdin
  .pipe(concat(function(data) {
    // reverse() does not work directly on a string.
    // we first need to split the characters of the string into an array,
    // reverse the array and then join it back into a string.
    console.log(data.toString().split('').reverse().join(''));
  }))
