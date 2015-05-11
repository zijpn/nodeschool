var _ = require('lodash');

var worker = function(collection) {
  return _.reduce(collection, function(result, item) {
    var elem = _.find(result, {'article': item.article});
    if (elem) {
      elem.total_orders += item.quantity;
    }
    else {
      result.push({"article": item.article, "total_orders": item.quantity});
    }
    return _.sortBy(result, 'article').reverse();
  }, []);
};

module.exports = worker;
