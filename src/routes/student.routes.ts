import { Router } from 'express';
import studentController from "../controllers/student.controller";

const router = Router();

/*
- listado de asignaturas (CU_1)
- añadir alumno en una asignatura (CU_2)
- ver detalle de una asignatura (CU_3)
- ver detalle de un alumno dentro de una asignatura (CU_4)*/

router.get('/all', studentController.getAllStudents);
router.get('/:id', studentController.getStudent);
router.post('/new', studentController.newStudent);
router.post('/:id/delete', studentController.delStudent);

export default router;