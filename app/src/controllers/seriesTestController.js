const axios = require("axios");

async function seriesTestController(url, apiKey) {
  const response = await axios.get(
    `${url}series?api_key=${apiKey}&series_id=PET.W_EPM0F_YPY_R10_MBBLD.4`
  );
  return response.data;
}

module.exports = seriesTestController;
