const express = require('express');
const User = require('../model/user');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    // create new user
    const user = new User({ username, password });
    await user.save();

    // store session data in database
    req.session.user = user;

    res.send('User registered successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
