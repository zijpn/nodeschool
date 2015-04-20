function repeat(operation, num) {
  return function() {
    if (num <= 0) return;
    operation();
    return repeat(operation, --num);
  }
}

function trampoline(fn, args) {
  var result = fn.apply(this, args);
  while (result instanceof Function) {
    result = result();
  }
}

module.exports = function(operation, num) {
  return trampoline(repeat, arguments);
}
