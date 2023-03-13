const express = require('express');
const User = require('../model/user');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // find user
    const user = await User.findOne({ username });

    // check password
    if (!user || user.password !== password) {
      res.status(401).send('Unauthorized');
      return;
    }

    // store session data in database
    req.session.user = user;

    // send session cookie to client
    res.cookie('sessionId', req.session.id, { httpOnly: true });
    res.send('User logged in successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
