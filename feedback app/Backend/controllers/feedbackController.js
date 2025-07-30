import Feedback from '../models/Feedback.js';

export const createFeedback = async (req, res) => {
  const { message } = req.body;
  try {
    const feedback = await Feedback.create({ message });
    res.status(201).json(feedback);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllFeedback = async (req, res) => {
  const feedback = await Feedback.find();
  res.json(feedback);
};

export const markReviewed = async (req, res) => {
  const { id } = req.params;
  const feedback = await Feedback.findByIdAndUpdate(id, { reviewed: true }, { new: true });
  res.json(feedback);
};

export const deleteFeedback = async (req, res) => {
  const { id } = req.params;
  await Feedback.findByIdAndDelete(id);
  res.json({ message: 'Feedback deleted' });
};
