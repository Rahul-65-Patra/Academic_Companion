import express from 'express';
import { addAssignment, getAssignments, markSubmitted,deleteAssignment } from '../controllers/assignmentController.js';
const router = express.Router();
router.post('/', addAssignment);
router.get('/:userId', getAssignments);
router.put('/:id/submit', markSubmitted);
router.delete('/:id', deleteAssignment);
export default router;