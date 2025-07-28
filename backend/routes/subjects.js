import express from 'express';
import { addSubject, getSubjects,getSubjectsDelet } from '../controllers/subjectController.js';
const router = express.Router();
router.post('/', addSubject);
router.get('/:userId', getSubjects);
router.delete('/:id', getSubjectsDelet);

export default router;


