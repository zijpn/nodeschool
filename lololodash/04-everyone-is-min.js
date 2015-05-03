var _ = require('lodash');

var worker = function(towns) {
  var result = { 'hot': [], 'warm': [] };
  _.forEach(towns, function(town, idx) {
    if (_.every(town, function(temp) {
      return temp > 19;
    })) {
      result.hot.push(idx);
    }
    else if (_.some(town, function(temp) {
      return temp > 19;
    })) {
      result.warm.push(idx);
    }
  });
  return result;
};

module.exports = worker;
