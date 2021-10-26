const User = require('../models/user.js');

module.exports = {
  getUsers: async function (req, res) {
    const allUsers = await User.getAllUsers()
    res.send(allUsers);
  },

  getUserById: async function (req, res) {
    const { id } = req.params;
    const result = await User.getUserById(id);
    if (result.length !== 0) {
      res.send(result);
    } else {
      res.status(404).send();
    }
  },

  createUser: function (req, res) {
    if (!req.body) return res.sendStatus(400);
  
    const { name, age } = req.body;
    const user = new User(name, age);
    user.addUser();
 
    res.send(user);
  },

  updateUserById: async function (req, res) {
    if (!req.body) return res.sendStatus(400);
  
    const { id } = req.params;
    const { name, age } = req.body;
    let result = await User.updateUserById(id, { name, age });
  
    if (result) {
      res.send(result);
    }
    else {
      res.status(404).send();
    }
  },

  deleteUserById: async function (req, res) {
    const { id } = req.params;
    const result = await User.deleteUserById(id);
  
    if (result) {
      res.send(result);
    }
    else {
      res.status(404).send();
    }
  },
};
