import express from 'express';
import dalleRouter from './v1/dalle.js';
import postRouter from './v1/post.js';

const v1Router = express.Router();

v1Router.use('/dalle', dalleRouter);
v1Router.use('/post', postRouter);

v1Router.get('/', (req, res) => {
  res.status('200').send('Welcome to Dall-E API V1');
});

export default v1Router;
