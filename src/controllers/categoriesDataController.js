const axios = require("axios");

async function categoriesDataController(url, apiKey, categoryId) {
  const response = await axios.get(
    `${url}category?api_key=${apiKey}&category_id=${categoryId}`
  );
  return response.data;
}

module.exports = categoriesDataController;
