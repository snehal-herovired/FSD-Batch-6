const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');




const app = express();

// connect to MongoDB
mongoose.connect('mongodb://localhost/session-example', { useNewUrlParser: true });

// use session middleware
app.use(session({
  secret: 'my-secret',
  resave: false,
  saveUninitialized: true
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(registerRouter);
app.use(loginRouter);

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
