require('dotenv').config();
const express = require('express');
const app = express();

const mongoose = require('mongoose');


const Mongo_URL = process.env.Mongo_URL || 'mongodb://127.0.0.1:27017/MVC_Exercise2';
const PORT = process.env.PORT || 3000;

// Connect to the database
mongoose
.connect(Mongo_URL)
.then(() => console.log("Connected to database!"));

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
app.use(userRoutes);
const productRoutes = require('./routes/productRoutes');
app.use(productRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
