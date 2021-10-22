const User = require('../models/user.js');

module.exports = {
  getUsers: function (req, res) {
    res.send(User.getAllUsers());
  },

  getUserById: function (req, res) {
    const { id } = req.params;
    const result = User.getUserById(id);
    if (result) {
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

  updateUserById: function (req, res) {
    if (!req.body) return res.sendStatus(400);
  
    const { id } = req.params;
    const { name, age } = req.body;
    let result = User.updateUserById(id, { name, age });
  
    if (result) {
      res.send(result);
    }
    else {
      res.status(404).send();
    }
  },

  deleteUserById: function (req, res) {
    const { id } = req.params;
    const result = User.deleteUserById(id);
  
    if (result) {
      res.send(result);
    }
    else {
      res.status(404).send();
    }
  },
};
