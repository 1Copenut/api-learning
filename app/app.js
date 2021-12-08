const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const queryString = require('querystring');
const rateLimit = require('express-rate-limit');
const url = require('url');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { BASE_URL, EIA_KEY, TEST_KEY } = require('./constants');

const app = express();
const baseController = require('./controllers/baseController');
const categoriesTestController = require('./controllers/categoriesTestController');
const categoriesDataController = require('./controllers/categoriesDataController');
const seriesTestController = require('./controllers/seriesTestController');
const seriesDataController = require('./controllers/seriesTestController');

/*
 * ======================================== *
 * App config
 * ======================================== *
 */
let errorObj = {
  success: false,
  status: 500,
};

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
app.get('/', async (req, res) => res.send(await baseController(TEST_KEY)));

/*
 * ======================================== *
 * Routing - Category Data
 * ======================================== *
 */

// EIA category smoke test
app.get('v1/api/categories/test', async (req, res) => {
  /* TODO: Eliminate this test route when real routes are complete */
  try {
    const results = await categoriesTestController(BASE_URL, EIA_KEY, '714755');
    return res.send(results);
  } catch (err) {
    errorObj = Object.assign({ message: err.message }, errorObj);
    return res.status(500).json(errorObj);
  }
});

app.get('v1/api/categories/data', async (req, res) => {
  /* FIXME: Add express-validator to prevent XSS */
  try {
    const category_id = await req.query.category_id;
    const results = await categoriesDataController(
      BASE_URL,
      EIA_KEY,
      category_id
    );
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
app.get('v1/api/series/test', async (req, res) => {
  /* TODO: Eliminate this test route when real routes are complete */
  try {
    const results = await seriesTestController(BASE_URL, EIA_KEY);
    return res.send(results);
  } catch (err) {
    errorObj = Object.assign({ message: err.message }, errorObj);
    return res.status(500).json(errorObj);
  }
});

// EIA series with query parameters
app.get('v1/api/series/data', async (req, res) => {
  /* FIXME: Add express-validator to prevent XSS */
  try {
    const series_id = await req.query.series_id;
    const results = await seriesDataController(BASE_URL, EIA_KEY, series_id);
    return res.send(results);
  } catch (err) {
    errorObj = Object.assign({ message: err.message }, errorObj);
    return res.status(500).json(errorObj);
  }
});

module.exports = app;
