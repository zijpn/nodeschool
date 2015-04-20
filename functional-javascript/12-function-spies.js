function Spy(target, method) {
  // create spy object with count value
  var spy = {count: 0};
  // keep reference to original function
  var oldFunction = target[method];
  // redefine the function
  target[method] = function() {
    // increment counter
    spy.count++;
    // invoke original function
    return oldFunction.apply(this, arguments);
  }
  return spy;
}
module.exports = Spy;
