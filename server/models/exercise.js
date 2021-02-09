import mongoose from 'mongoose';

const exerciseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  targetedBodyParts: [{
    type: mongoose.Schema.Types.ObjectId, ref: 'BodyPart',
  },
  ],
});

export default mongoose.model('Exercise', exerciseSchema);
