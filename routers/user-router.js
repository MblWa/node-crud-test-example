const express = require("express");
const userController = require('../controllers/user-controller');

const jsonParser = express.json();
const userRouter = express.Router();

// GET request to recieve users list
userRouter.get('/', userController.getUsers);
// GET request to recieve user info by id
userRouter.get('/:id', userController.getUserById);
// POST request to add new user
userRouter.post("/", jsonParser, userController.createUser);
// PUT request to change user data by ID
userRouter.put("/:id", jsonParser, userController.updateUserById);
// DELETE request to remove a user by id
userRouter.delete("/:id", userController.deleteUserById);

module.exports = userRouter;
