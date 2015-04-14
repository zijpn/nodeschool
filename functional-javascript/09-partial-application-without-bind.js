// Read also: http://benalman.com/news/2012/09/partial-application-in-javascript/

function logger(namespace) {
  // A reference to the Array#slice method.
  var slice = Array.prototype.slice;
  // Convert arguments object to an array (with single element ns)
  var ns = slice.call(arguments);
  return function() {
    // Invoke console.log, passing namespace arg followed by any just-specified arguments
    console.log.apply(this, ns.concat(slice.call(arguments)));
  }
}

module.exports = logger;
