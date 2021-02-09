import mongoose from 'mongoose';

const bodyPartSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model('BodyPart', bodyPartSchema);
