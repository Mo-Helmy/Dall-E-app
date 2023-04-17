import express from 'express';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import v1Router from './routes/index.js';
import env from './util/env.js';

const port = env.port;
const mongodbUrl = env.mongodbUrl;

const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/v1', v1Router);

app.get('/', (req, res) => {
  res.status(200).send('Welcome to Dall-E API.');
});

const startServer = async () => {
  try {
    connectDB(mongodbUrl);
    app.listen(port, () => {
      console.log(`server started at http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
