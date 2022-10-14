const { application } = require('express')
const mongoose = require('mongoose')
const StudentModel= require('../Model/StudentModel')
 
const createStudent=async(req,res)=>{
    
        const reqbody= req.body
        const{studentName ,subject,marks}=req.body;

    if(!studentName||!marks||!subject){
        res.send({status:false,})
    }
    
    const studentDetail=await StudentModel.create(req.body)
    return res.send({ status: true, message: 'successfully created ', data: { studentDetail } })
}
//////////////////////////////////////////........................
const updateStudent=async(req,res)=>{
    const marked=req.params.marks;
    let name=await StudentModel.findOne(studentName)
    if(!name)
    res.send({status:false})
    if(marks==name.marks)
    return res.send({status:false,message:"marks corresponds to the name is already exist"})
    const studentName=req.body;
    const subject=req.body;
    const marks=req.body;
    if(studentName||subject||marks){
        const updatedMark=await StudentModel.findOneAndUpdate({marked:marks}
    )}
    res
    
    .send({ status: true, msg: "Updated successfully" });
 

}
// //////////////////////////////////////////////////////////////////////////////
const getStudent=async(req,res)=>{
    let student=await StudentModel.findOne(req.studentName)
    return res.send(student)
}
// /////////////////////////////////////////////////////////////////////////////////
const deleteStudent=async(req,res)=>{

    let student=req.body.studentName;
    if(student){
    let deletedMarks=await StudentModel.findOneAndUpdate({marks},{isDeleted:true},{new:true})
    return res.send(deletedMarks,{msg:"marks successfully deleted"})
}
module.exports .createStudent=createStudent
module.exports.updateStudent=updateStudent
module.exports.getStudent=getStudent
module.exports.deleteStudent=deleteStudent


