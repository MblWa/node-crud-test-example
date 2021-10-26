const { v4: uuidv4 } = require('uuid');
const { addUserToDB, getAllUsersFromDB, getUserByIDfromDB, updateUserByIDFromDB, deleteUserByIDFromDB } = require('../DAL/usersDAL');

module.exports = class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.id = uuidv4();
  }

  addUser() {
    addUserToDB(this);
  }

  static getUserById(id) {
    return getUserByIDfromDB(id);
  }

  static updateUserById(id, data) {
    const { name, age } = data;

    return updateUserByIDFromDB(id, name, age);
  }

  static deleteUserById(id) {
    return deleteUserByIDFromDB(id);
  }

  static getAllUsers() {
    return getAllUsersFromDB();
  }
};
