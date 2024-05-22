const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Int32 } = require('mongodb');
require('dotenv').config({ path: '../.env' });

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB using the correct URL
mongoose.connect(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define the schema for the student data
const studentSchema = new mongoose.Schema({
  name: String,
  surname: String,
  username: String,
  email: String,
  password: String,
  student_id: Number,
  birth: Date,
  phone: Number,
});

// Create the Mongoose model
const Student = mongoose.model('Student', studentSchema);

// Define the GET route to retrieve all student data
app.get('/get', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
