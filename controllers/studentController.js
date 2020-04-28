const fs = require('fs');
const Student = require('../models/studentModel');

// GET ALL STUDENTS
exports.getAllStudents = async (req, res) => {
	try {
		const students = await Student.find();
		res.status(200).json({
			count: students.length,
			status: 'success',
			data: {
				students
			}
		});
	}
	catch(err) {
		res.status(404).json({
			status: 'fail',
			message: err
		})
	}
};

// GET A STUDENT
exports.getStudent = async (req, res) => {
	try {
		const student = await Student.findById(req.params.id);
		res.status(200).json({
			status: 'success',
			data: {
				student
			}
		});
	}
	catch(err) {
		res.status(404).json({
			status: 'error',
			message: err
		});
	}	
};

// CREATE A STUDENT
exports.createStudent = async (req, res) => {
	try {
		const newStudent = await Student.create(req.body);
		res.status(201).json({
			status: 'success',
			data: {
				student: newStudent
			}
		});
	} catch(err) {
		res.status(400).json({
			status: 'fail',
			message: 'Invalid Request Sent'
		});
	}
};

// UPDATE A STUDENT
exports.updateStudent = async (req, res) => {
	try {
		const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true
		});
		res.status(200).json({
			status: 'success',
			data: {
				student
			}
		});
	}
	catch(err) {
		res.status(404).json({
			status: 'fail',
			message: err
		});
	}	
};

// DELETE A STUDENT
exports.deleteStudent = async (req, res) => {
	try {
		await Student.findByIdAndDelete(req.params.id);
		res.status(204).json( {
			status: 'success',
			data: null
		})
	}
	catch(err) {
		res.status(400).json({
			status: 'fail',
			message: 'Invalid Request Sent'
		});
	}
};