const { application } = require('express');
const jwt = require('jsonwebtoken');
const StudentModel= require('../Model/StudentModel')
app.post=('/login',async(req,res)=>{
    
        let body = req.body
        const {studentName,marks,subject} =req. body
        let exist = await StudentModel.findOne({studentName})
        if(!exist){
            return res.status(400).send({status:false,message:"student not found"})
        }
        let payload = {
            student:{
                studentName:exist.studentName
            }
        }
        jwt.sign(payload,'jwtSecret',{expiresIn:3600000},
            (err,token) => {
                if(err) throw err;
                return res.json({token})
            })
        })
        module.exports.login=login;