function duckCount() {
  // convert arguments object to array
  var args = Array.prototype.slice.call(arguments);
  // count elements that have 'quack' property
  return args.reduce(function(count, arg) {
    if (Object.prototype.hasOwnProperty.call(arg, 'quack')) {
      count++;
    }
    return count;
  }, 0);
}
module.exports = duckCount;
