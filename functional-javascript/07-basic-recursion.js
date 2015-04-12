function reduce(arr, fn, initial) {
  if (arr.length === 0) {
    return initial;
  }
  var next = fn(initial, arr[0], 0, arr);
  return reduce(arr.slice(1), fn, next);
}
module.exports = reduce;
