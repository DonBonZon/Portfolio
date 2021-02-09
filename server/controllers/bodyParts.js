/* eslint-disable import/extensions */
import BodyPart from '../models/bodyPart.js';

export const getBodyParts = async (req, res) => {
  try {
    const bodyParts = await BodyPart.find().populate('exercises');
    res.status(200).json(bodyParts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBodyPart = async (req, res) => {
  try {
    const bodyPart = await BodyPart.findById(req.params.id).populate('exercises');
    if (bodyPart == null) {
      res.status(404).json({ message: 'Cannot find given body part' });
    } else {
      res.status(200).json(bodyPart);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const addBodyPart = async (req, res) => {
  const bodyPart = new BodyPart({
    name: req.body.name,
    exercises: req.body.exercises,
  });
  try {
    const newBodyPart = await bodyPart.save();
    res.status(201).json(newBodyPart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBodyPart = async (req, res) => {
  try {
    await BodyPart.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: 'BodyPart was successfully deleted from db' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const editBodyPart = async (req, res) => {
  try {
    const updatedExercise = await BodyPart
      .updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json({ updatedExercise });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
