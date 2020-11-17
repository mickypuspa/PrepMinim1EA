import { Router } from 'express';
import subjectsController from "../controllers/subjects.controller";

const router = Router();

/*
- listado de asignaturas (CU_1)
- añadir alumno en una asignatura (CU_2)
- ver detalle de una asignatura (CU_3)
- ver detalle de un alumno dentro de una asignatura (CU_4)*/

router.get('/all', subjectsController.getAllSubjects);
router.get('/:id', subjectsController.getSubject);
router.post('/new', subjectsController.addSubject)
router.post('/:id/:idStudent', subjectsController.addStudent);

export default router;