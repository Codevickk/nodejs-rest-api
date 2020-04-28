const fs = require('fs');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Student = require('./../models/studentModel');

dotenv.config({
     path: './config.env'
});

const DB = process.env.LOCAL_DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then((con) => {
    console.log('DB Connected Successfully!')
} );

// IMPORT THE DATA
const students = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));

// SAVE TO THE DATABASE
const importData = async () => {
    try {
        await Student.create(students);
        console.log('Successfully Created!!!')
    }
    catch(err) {
        console.log(err);
    }
}

importData();