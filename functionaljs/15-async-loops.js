function loadUsers(userIds, load, done) {
  var users = [];
  var complete = 0;
  for (var i = 0; i < userIds.length; i++) {
    load(userIds[i], (function (index) {    // build a closure with `i`
      return function (user) {
        users[index] = user;
        complete++;
        if (complete == userIds.length) {   // all done
          done(users);
        }
      }
    })(i));
  }
}

module.exports = loadUsers;
