module.exports = function arrayMap(arr, fn) {
  // initial value is empty array, at which we append the
  // elements after passing them to the provided fn
  return arr.reduce(function(prev, curr) {
    return prev.concat(fn(curr));
  }, []);
}
