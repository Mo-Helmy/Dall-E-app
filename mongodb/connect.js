import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);

  mongoose
    .connect(url)
    .then(() =>
      console.log('mongoose connected to dall-e database successfully')
    )
    .catch((error) => {
      console.log('mongoose failed to connect to dall-e database');
      console.log(error);
    });
};

export default connectDB;
