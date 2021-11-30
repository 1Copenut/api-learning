const fetch = require("node-fetch");

async function categoriesTestController(url, apiKey, categoryId) {
  const response = await fetch(
    `${url}category?api_key=${apiKey}&category_id=${categoryId}`
  );
  const results = await response.json();
  return results;
}

module.exports = categoriesTestController;
