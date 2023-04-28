import mongoose from 'mongoose';
const MONGODB_URI="mongodb+srv://abbash7:abbasH123@cluster0.jrhha.mongodb.net/image-gallery"

const connectDB = handler => async (req, res) => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return handler(req, res);
  }
  // Use new db connection
  await mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  return handler(req, res);
};

export default connectDB;
