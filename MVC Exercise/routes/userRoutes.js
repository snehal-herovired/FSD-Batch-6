const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');


userRouter.post('/auth/signup', userController.registerUser);
userRouter.post('/auth/login', userController.loginUser);

module.exports = userRouter;
