var _ = require('lodash');

var worker = function(item) {
  return _.template("Hello <%=user%> (logins: <%=logins%>)")({user: item.name, logins: item.login.length});
};

module.exports = worker;
