import {Request, Response} from 'express';
import Subject from "../models/subject";
import Student from "../models/student";

const getAllSubjects = async (req: Request, res: Response) => {

    try {
        const results = await Subject.find({}).populate('students');
        return res.status(200).json(results);
    } catch(err) {
        return res.status(400).json(err);
    };
}

const getSubject = async (req:Request, res: Response) => {
    try{
        const results = await Subject.find({"_id": req.params.id}).populate('students');
        return res.status(200).json(results);   
        } catch(err) {
            return res.status(400).json(err);
        }
}

const addSubject = async (req: Request, res: Response) => {
    const subject = new Subject({
        "name": req.body.name,
        "students": []
    });
    subject.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

const addStudent = async (req: Request, res: Response) => {
    const student = await Student.findOne({"_id": req.params.idStudent});

    if(student){
        Subject.updateOne({"_id": req.params.id}, {$addToSet: {students: student?._id}}).then(data => { 
            if (data.nModified == 1) { 
                return res.status(201).send({message: 'Student added successfully'}); 
            } else { 
                return res.status(409).json('Student already exists!!!') 
        } }).catch((err) => { 
            return res.status(400).json(err); 
        }); 
    }
    else{
        return res.status(404).send({message: 'Student not found'}); 
    }
}
    
export default {getAllSubjects, getSubject, addSubject, addStudent};