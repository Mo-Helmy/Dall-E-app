import * as dotenv from 'dotenv';

dotenv.config();

const env = {
  port: process.env.PORT,
  mongodbUrl: process.env.MONGODB_URL,
  openaiApi: process.env.OPENAI_API_KEY,

  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  cloud_api_key: process.env.CLOUDINARY_API_KEY,
  cloud_api_secret: process.env.CLOUDINARY_API_SECRET,
};

export default env;
