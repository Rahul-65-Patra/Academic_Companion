// routes/examRoutes.js
import express from 'express';
import { addExam, getExam, deleteExam } from '../controllers/examController.js';
const router = express.Router();

router.post('/', addExam);
router.get('/:userId', getExam);
router.delete('/:id', deleteExam);


export default router;
