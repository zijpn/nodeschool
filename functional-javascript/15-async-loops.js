// see also http://metaduck.com/01-asynchronous-iteration-patterns.html
function loadUsers(userIds, load, done) {
  var users = [];
  var count = userIds.length;
  userIds.forEach(function(userId, idx) {
    load(userId, function(user) {
      users[idx] = user;
      count--;
      if (count === 0) {
        return done(users);
      }
    });
  });
}
module.exports = loadUsers
