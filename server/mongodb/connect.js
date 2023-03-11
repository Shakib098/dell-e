import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
      console.error('failed to connect with mongo');
      console.error(err);
    });
};

export default connectDB;

// kgLF4RU8oPiwRoaf

// mongodb+srv://shakib:<password>@cluster0.km8em8b.mongodb.net/?retryWrites=true&w=majority