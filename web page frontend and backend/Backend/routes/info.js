// info.js
const express = require('express');
const { user } = require('../controllers/controllers');
const router = express.Router();

// Get personal information
router.get('/', user);

module.exports = router;
