/* eslint-disable import/extensions */
import express from 'express';
import Exercise from '../models/exercise.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const exercises = await Exercise.find().populate('targetedBodyParts');
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const exercise = new Exercise({
    name: req.body.name,
    description: req.body.description,
    targetedBodyParts: req.body.targetedBodyParts,
  });
  try {
    const newExercise = await exercise.save();
    res.status(201).json(newExercise);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id).populate('targetedBodyParts');
    if (exercise == null) {
      res.status(404).json({ message: 'Cannot find given exercise' });
    } else {
      res.status(200).json(exercise);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
