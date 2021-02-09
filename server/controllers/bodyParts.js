/* eslint-disable import/extensions */
import BodyPart from '../models/bodyPart.js';

export const getBodyParts = async (req, res) => {
  try {
    const bodyParts = await BodyPart.find();
    res.status(200).json(bodyParts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addBodyPart = async (req, res) => {
  const bodyPart = new BodyPart({
    name: req.body.name,
  });
  try {
    const newBodyPart = await bodyPart.save();
    res.status(201).json(newBodyPart);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBodyPart = async (req, res) => {
  try {
    const bodyPart = await BodyPart.findById(req.params.id);
    if (bodyPart == null) {
      res.status(404).json({ message: 'Cannot find given body part' });
    } else {
      res.status(200).json(bodyPart);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
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
    if (req.body.name) {
      const updatedBodyPart = await BodyPart
        .updateOne({ _id: req.params.id }, { $set: { name: req.body.name } });
      res.status(200).json(updatedBodyPart);
    } else res.status(400).json({ message: 'Edition of bodyPart failed' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
