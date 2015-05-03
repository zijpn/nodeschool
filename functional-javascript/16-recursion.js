function getDependencies(tree, result) {
  var result = result || [];
  var deps = tree.dependencies || {};
  Object.keys(deps).forEach(function(dep) {
    var depStr = dep + "@" + deps[dep].version;
    if (result.indexOf(depStr) < 0) {
      result.push(depStr);
    }
    // recursion
    getDependencies(deps[dep], result);
  })
  return result.sort();
}
module.exports = getDependencies;
