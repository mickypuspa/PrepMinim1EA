"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subjects_controller_1 = __importDefault(require("../controllers/subjects.controller"));
const router = express_1.Router();
/*
- listado de asignaturas (CU_1)
- añadir alumno en una asignatura (CU_2)
- ver detalle de una asignatura (CU_3)
- ver detalle de un alumno dentro de una asignatura (CU_4)*/
router.get('/all', subjects_controller_1.default.getAllSubjects);
router.get('/:id', subjects_controller_1.default.getSubject);
router.post('/new', subjects_controller_1.default.addSubject);
router.post('/:id/:idStudent', subjects_controller_1.default.addStudent);
exports.default = router;
