const { findUserIdById } = require('../util.js');

const users = [
  {
    "id": "4ce2cd85-2235-4bf8-bdb5-34ec9afc48a5",
    "name": "Tom",
    "age": 24
  },
  {
    "id": "c08355f4-5caa-48ac-b056-24d3c2cbefef",
    "name": "Bob",
    "age": 27
  },
  {
    "id": "c08355f4-5caa-48ac-b056-24d3c2cbefe1",
    "name": "Alice",
    "age": 42
  },
  {
    "id": "5afb655e-7c06-49db-a442-e76933f17c8e",
    "name": "Anasstasia",
    "age": 42
  }
];

module.exports = {
  addUserToDB: function(user) {
    users.push(user);
  },

  getUserByIDfromDB: function(id) {
    const userId = findUserIdById(users, id);
    if (userId !== -1) {
      return users[userId];
    } else {
      return undefined;
    }
  },

  updateUserByIDFromDB: function(id, name, age) {
    const userId = findUserIdById(users, id);
  
    if (userId !== -1) {
      users[userId].name = name;
      users[userId].age = age;
  
      return users[userId];
    } else {
      return undefined;
    }
  },

  deleteUserByIDFromDB: function(id) {
    const userId = findUserIdById(users, id);
  
    if (userId !== -1) { 
      return users.splice(userId, 1)[0];
    } else {
      return undefined;
    }
  },

  getAllUsersFromDB: function() {
    return users;
  },
};
