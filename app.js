require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const port = 3000;
const queryString = require('querystring');
const rateLimit = require('express-rate-limit');
const url = require('url');
const { raw } = require('express');

const app = express();

/*
 * ======================================== *
 * App config
 * ======================================== *
 */
const baseUrl = 'https://api.eia.gov/';
let errorObj = {
  success: false,
  status: 500,
};

/*
 * ======================================== *
 * Environmental variables
 * ======================================== *
 */
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
 * Routing - Default
 * ======================================== *
 */
app.get('/', (req, res) => res.send(TEST_KEY));

/*
 * ======================================== *
 * Routing - Category Data
 * ======================================== *
 */

// EIA category smoke test
app.get('/api/categories/test', async (req, res) => {
  try {
    const response = await fetch(
      `${baseUrl}category?api_key=${EIA_KEY}&category_id=714755`
    );
    const results = await response.json();

    return res.send(results);
  } catch (err) {
    errorObj = Object.assign({ message: err.message }, errorObj);
    return res.status(500).json(errorObj);
  }
});

app.get('/api/categories/data', async (req, res) => {
  try {
    const category_id = await req.query.category_id;
    const response = await fetch(
      `${baseUrl}category?api_key=${EIA_KEY}&category_id=${category_id}`
    );
    const results = await response.json();

    return res.send(results);
  } catch (err) {
    errorObj = Object.assign({ message: err.message }, errorObj);
    return res.status(500).json(errorObj);
  }
});

/*
 * ======================================== *
 * Routing - Series Data
 * ======================================== *
 */

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
    const series_id = await req.query.series_id;
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

app.listen(port, () =>
  console.log(`App listening on http://localhost:${port}`)
);

module.exports = app;