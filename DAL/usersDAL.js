const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  id: String,
  name: String,
  age: Number,
});

const User = mongoose.model('UserModel', UserSchema);

module.exports = {
  addUserToDB: function (userData) {
    const user = new User({ id: userData.id, name: userData.name, age: userData.age });
    user.save(function (err) {
      if (err) {
        console.log(err);
        return undefined;
      }
    });
  },

  getUserByIDfromDB: function (id) {
    return User.find({ id }, { _id: 0, id: 1, name: 1, age: 1 });
  },

  updateUserByIDFromDB: function (id, name, age) {
    return User.findOneAndUpdate({ id }, { name, age }, { projection: { _id: 0, id: 1, name: 1, age: 1 }, new: true });
  },

  deleteUserByIDFromDB: function (id) {
    return User.findOneAndDelete({ id }, { projection: { _id: 0, id: 1, name: 1, age: 1 } });
  },

  getAllUsersFromDB: function () {
    return User.find({}, { _id: 0, id: 1, name: 1, age: 1 });
  },
};
