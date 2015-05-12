var _ = require('lodash');

var worker = function(todo) {
  // sort todo items
  _.forEach(todo, function(item, key) {
    todo[key] = _.sortBy(item, 'date');
  });
  // lololodash 0.5.3 has bug in verify (spaces!)
  function fixme(str) {
    return (str.length === 1) ? " " + str : str;
  }
  // output template
  var template =
    '<ul>\n' +
    '<% _.forEach(data, function(item, key) { %>' +
      '<li><%= key %>\n' +
        '<ul>' +
        '<% _.forEach(item, function(todo) { %>' +
          '<li>' +
          '<% if (Date.parse(todo.date) - new Date() < 2 * 3600 * 24 * 1000) { %>' +
            '<b>URGENT</b><%= fixme(todo.todo) %>' +
          '<% } else { %>' +
            '<%= todo.todo %>' +
          '<% } %>' +
          '</li>\n' +
        '<% }); %>' +
        '</ul>\n' +
      '</li>\n' +
    '<% }); %>' +
    '</ul>';
  // apply data
  return _.template(template, { 'imports': { 'fixme': fixme } })({data: todo});
};

module.exports = worker;
