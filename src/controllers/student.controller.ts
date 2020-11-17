import {Request, Response} from 'express';
import Student from "../models/student";

const getAllStudents = async (req:Request, res:Response) => {
    
    try{
        const results = await Student.find({});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(400).json(err);
    }
}

const getStudent = async (req:Request, res:Response) => {
    
    try{
        const results = await Student.find({"_id": req.params.id});
        return res.status(200).json(results);
    } catch (err){
        return res.status(400).json(err);
    }
}

const newStudent = async (req:Request, res:Response) => {

    try{
        let student = new Student({
            "name": req.body.name,
            "address": req.body.address,
            "phones" : req.body.phones
    });
    student.save().then((data) => {
        return res.status(202).json(data);
    });
    } catch (err){
        return res.status(400).json(err);
    }
}

//extra function

const delStudent = async (req:Request, res:Response) => {
    Student.deleteOne({"_id": req.params.id}).then((data) => {
        return res.status(200).json(data);
    }).catch((err) => {
        return res.status(400).json(err);
    })
}

export default {getAllStudents, getStudent, newStudent, delStudent};