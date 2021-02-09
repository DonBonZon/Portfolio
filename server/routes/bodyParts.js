/* eslint-disable import/extensions */
import express from 'express';
import {
  getBodyParts,
  addBodyPart,
  getBodyPart,
  deleteBodyPart,
  editBodyPart,
} from '../controllers/bodyParts.js';

const router = express.Router();

// getting all bodyParts
router.get('/', getBodyParts);

// inserting single bodyPart
router.post('/', addBodyPart);

// getting bodyPart by id
router.get('/:id', getBodyPart);

// deleting signle bodyPart by id
router.delete('/:id', deleteBodyPart);

// updating single bodyPart
router.patch('/:id', editBodyPart);

export default router;
