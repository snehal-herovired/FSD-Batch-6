const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect("mongodb://localhost/portfolio"||process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB database');
});

mongoose.connection.on('error', (err) => {
  console.log(`Error while connecting to MongoDB database: ${err}`);
});

// Define routes
app.use('/auth', require('./routes/auth'));
app.use('/projects', require('./routes/projects'));
app.use('/info', require('./routes/info'));
app.use('/contactme', require('./routes/contactme'));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`); 
});
