import express from 'express';
import { createFeedback, getAllFeedback, markReviewed, deleteFeedback } from '../controllers/feedbackController.js';

const router = express.Router();

router.post('/', createFeedback);
router.get('/', getAllFeedback);
router.put('/:id', markReviewed);
router.delete('/:id', deleteFeedback);

export default router;
