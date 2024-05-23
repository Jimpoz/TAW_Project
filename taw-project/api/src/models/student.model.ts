const mongoose = require('mongoose');

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

module.exports = { studentSchema };