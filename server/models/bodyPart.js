import mongoose from 'mongoose';

const bodyPartSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  exercises: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }],
});

export default mongoose.model('BodyPart', bodyPartSchema);
