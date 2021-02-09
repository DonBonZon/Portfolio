/* eslint-disable import/extensions */
import express from 'express';
import {
  getExercices,
  getExercice,
  updateExercise,
  addExercise,
  deleteExercise,
} from '../controllers/exercises.js';

const router = express.Router();

// getting all Exercises
router.get('/', getExercices);

// inserting single Exercise
router.post('/', addExercise);

// getting Exercise by id
router.get('/:id', getExercice);

// deleting Exercise by id
router.delete('/:id', deleteExercise);

// updating single Exercise
router.patch('/:id', updateExercise);

export default router;
