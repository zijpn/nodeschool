var _ = require('lodash');

var worker = function(collection) {
  var result = {};
  var sum = _.reduce(collection, function(avg, person) {
    return avg + person.income;
  }, 0);
  result.average = sum / collection.length;
  result.underperform = _.sortBy(_.filter(collection, function(person){
    return person.income <= result.average;
  }), 'income');
  result.overperform = _.sortBy(_.filter(collection, function(person){
    return person.income > result.average;
  }), 'income');
  return result;
};

module.exports = worker;
