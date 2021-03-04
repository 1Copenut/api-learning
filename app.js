// https://www.freecodecamp.org/news/private-api-keys/

require('dotenv').config();

const express = require('express');
const fetch = require('node-fetch');
const port = 3000;
const queryString = require('querystring');
const rateLimit = require('express-rate-limit');
const url = require('url');
const { raw } = require('express');

const app = express();

// Rate limiting
const limiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 1, // Limit each IP to 1 request per windowMs
});

// Apply to all requests
app.use(limiter);

// Routing
// Test route, visit localhost:3000 to confirm it's working
app.get('/', (req, res) => res.send(process.env.TEST_KEY));

app.get('/eia', (req, res) => res.send(process.env.EIA_KEY));

// Our Goodreads relay route
app.get('/api/search', async (req, res) => {
  try {
    // TODO:
    // Next, parse out the query params from a raw
    // string and add them to the async fetch call
    const rawUrl = 'https://api.eia.gov/series/?series_id=PET.W_EPM0F_YPY_R10_MBBLD.4';

    const baseUrl = 'https://api.eia.gov/series';
    const response = await fetch(`${baseUrl}?api_key=${process.env.EIA_KEY}&series_id=PET.W_EPM0F_YPY_R10_MBBLD.4`);
    const results = await response.json();

    return res.send(results);
  } catch (err) {
    return res.status(500).json({
      success: false,
      status: 500,
      message: err.message,
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}`));