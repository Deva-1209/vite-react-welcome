import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  message: { type: String, required: true },
  reviewed: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model('Feedback', feedbackSchema);
