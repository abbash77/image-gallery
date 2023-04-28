import mongoose from 'mongoose';

const ImgSchema = new mongoose.Schema({
    description:{type:String},
    url: { type: String, required: true },
  });

export default mongoose.models.Data || mongoose.model('Data', ImgSchema);