import express from 'express';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../../mongodb/models/post.js';
import env from '../../util/env.js';

const postRouter = express.Router();

cloudinary.config({
  cloud_name: env.cloud_name,
  api_key: env.cloud_api_key,
  api_secret: env.cloud_api_secret,
});

postRouter.get('/', async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Fetching posts failed, please try again',
    });
  }
});

postRouter.post('/', async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;

    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({ name, prompt, photo: photoUrl.url });

    res.status(201).json({ success: true, data: newPost });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Unable to create a post, please try again',
      error: error,
    });
  }
});

export default postRouter;
