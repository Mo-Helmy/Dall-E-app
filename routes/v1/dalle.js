import express from 'express';
import { Configuration, OpenAIApi } from 'openai';
import env from '../../util/env.js';

const dalleRouter = express.Router();

const configuration = new Configuration({
  apiKey: env.openaiApi,
});

const openai = new OpenAIApi(configuration);

dalleRouter.post('/', async (req, res) => {
  try {
    console.log('=====TEST');
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });
    console.log(
      '🚀 ~ file: dalle.js:23 ~ dalleRouter.post ~ aiResponse:',
      aiResponse
    );

    const photo = aiResponse.data.data[0].b64_json;

    res.status(201).json({ photo });
  } catch (error) {
    console.log(error.response.data.error);
    res.status(400).send(error);
  }
});

export default dalleRouter;
