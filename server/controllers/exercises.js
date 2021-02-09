/* eslint-disable import/extensions */
import Exercise from '../models/exercise.js';

export const getExercices = async (req, res) => {
  try {
    const exercises = await Exercise.find().populate('targetedBodyParts');
    res.status(200).json(exercises);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getExercice = async (req, res) => {
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
};

export const updateExercise = async (req, res) => {
  try {
    const updatedExercise = await Exercise
      .updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json({ updatedExercise });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const addExercise = async (req, res) => {
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
};

export const deleteExercise = async (req, res) => {
  try {
    await Exercise.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'Exercise was successfully deleted from db' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
