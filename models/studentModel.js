const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A student must have a name'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'A student must have an email'],
        unique: true
    },
    gender: {
        type: String,
        required: [true, 'A student must have a gender']
    },
    course: {
        type: String,
        required: [true, 'A student must have a course']
    },
    age: {
        type: Number,
        required: [true, 'A Student must have an age']
    }
})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student;