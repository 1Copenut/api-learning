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
const baseUrl = 'https://api.eia.gov/';
const EIA_KEY = process.env.EIA_KEY;
const TEST_KEY = process.env.TEST_KEY;

/*
 * ======================================== *
 * Rate limiting
 * ======================================== *
 */
const limiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 1, // Limit each IP to 1 request per windowMs
});

app.use(limiter);

/*
 * ======================================== *
 * Routing - Series Data
 * ======================================== *
 */

// Smoke test
app.get('/api/test', (req, res) => res.send(TEST_KEY));

// EIA series smoke test
app.get('/api/series/test', async (req, res) => {
  try {
    const response = await fetch(
      `${baseUrl}series?api_key=${EIA_KEY}&series_id=PET.W_EPM0F_YPY_R10_MBBLD.4`
    );
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

// EIA series with query parameters
app.get('/api/series/data', async (req, res) => {
  try {
    let series_id = await req.query.series_id;
    const response = await fetch(
      `${baseUrl}/series?api_key=${EIA_KEY}&series_id=${series_id}`
    );
    const results = await response.json();

    return res.send(results);
  } catch (err) {
    return res.status(500).json({
      success: false,
      status: 500,
      res: err.message,
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}`));
