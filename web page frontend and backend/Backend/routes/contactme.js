// contactme.js
const express = require('express');
const { contact } = require('../controllers/controllers');
const router = express.Router();

// Receive custom remarks
router.post('/', contact);

module.exports = router;
