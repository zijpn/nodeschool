function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
    return submittedUsers.every(function(user) {
      return goodUsers.some(function(gooduser) {
        return (gooduser.id === user.id);
      });
    });
  }
}
module.exports = checkUsersValid;
