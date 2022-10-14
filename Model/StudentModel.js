const mongoose = require('mongoose');

let studentSchema = new mongoose.Schema({
    studentName : {
        type:String,
        required:true
    },
    subject : {
        type:String,
        required:true,
        unique:true
    },
    marks : {
        type:Number,
        default:0
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
} ,{ timestamps: true })


module.exports = mongoose.model('user',studentSchema)
