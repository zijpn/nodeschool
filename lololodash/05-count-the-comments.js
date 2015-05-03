var _ = require('lodash');

var worker = function(collection) {
  var result = [];
  var group = _.groupBy(collection, 'username');
  _.forEach(group, function(user, username) {
    result.push({'username': username, 'comment_count': _.size(user)});
  });
  return _.sortBy(result, 'comment_count').reverse();
};

module.exports = worker;
