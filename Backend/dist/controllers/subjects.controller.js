"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const subject_1 = __importDefault(require("../models/subject"));
const student_1 = __importDefault(require("../models/student"));
const getAllSubjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield subject_1.default.find({}).populate('students');
        return res.status(200).json(results);
    }
    catch (err) {
        return res.status(400).json(err);
    }
    ;
});
const getSubject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield subject_1.default.find({ "_id": req.params.id }).populate('students');
        return res.status(200).json(results);
    }
    catch (err) {
        return res.status(400).json(err);
    }
});
const addSubject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const subject = new subject_1.default({
        "name": req.body.name,
        "students": []
    });
    subject.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    });
});
const addStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const student = yield student_1.default.findOne({ "_id": req.params.idStudent });
    if (student) {
        subject_1.default.updateOne({ "_id": req.params.id }, { $addToSet: { students: student === null || student === void 0 ? void 0 : student._id } }).then(data => {
            if (data.nModified == 1) {
                return res.status(201).send({ message: 'Student added successfully' });
            }
            else {
                return res.status(409).json('Student already exists!!!');
            }
        }).catch((err) => {
            return res.status(400).json(err);
        });
    }
    else {
        return res.status(404).send({ message: 'Student not found' });
    }
});
exports.default = { getAllSubjects, getSubject, addSubject, addStudent };
