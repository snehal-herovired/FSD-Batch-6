// projects.js
const express = require('express');
const { projects } = require('../controllers/controllers');
const router = express.Router();

// Get all projects
router.get('/', projects);

module.exports = router;
