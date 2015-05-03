function curryN(fn, n) {
  var depth = n || fn.length;
  function genCurry(prev) {
  	return function(arg) {
  		var args = prev.concat(arg);
      // not all args have been satisfied yet, so return a curried version
  		if (args.length < depth) {
        return genCurry(args);
      }
      // otherwise, invoke the original fn 
  		return fn.apply(this, args);
  	}
  }
  // return a curried version of the original fn
  return genCurry([]);
}
module.exports = curryN;
