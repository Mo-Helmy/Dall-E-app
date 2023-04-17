import axios from 'axios';

const dalleUrl = 'https://openai80.p.rapidapi.com/images/generations';
const dalleHeaders = {
  'content-type': 'application/json',
  'X-RapidAPI-Key': import.meta.env.VITE_X_RAPIDAPI_KEY,
  'X-RapidAPI-Host': 'openai80.p.rapidapi.com',
};

export const createImage = async (prompt) => {
  const data = JSON.stringify({
    prompt,
    n: 1,
    size: '512x512',
    response_format: 'b64_json',
  });

  const aiResponse = await axios.post(dalleUrl, data, {
    headers: dalleHeaders,
  });

  const photo = aiResponse.data.data[0].b64_json;

  return photo;
};
