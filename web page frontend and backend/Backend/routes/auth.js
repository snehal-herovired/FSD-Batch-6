// auth.js
const express = require('express');
const { signup, login } = require('../controllers/controllers');
const router = express.Router();

// Register new user
router.post('/register', signup);

// Login existing user
router.post('/login', login);

module.exports = router;
