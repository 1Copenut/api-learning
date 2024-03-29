const axios = require('axios');

async function seriesController(url, apiKey, seriesId) {
  const response = await axios.get(
    `${url}series?api_key=${apiKey}&series_id=${seriesId}`
  );
  return response.data;
}

export default seriesController;