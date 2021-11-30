require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const queryString = require('querystring');
const rateLimit = require('express-rate-limit');
const url = require('url');
const { raw } = require('express');

const { EIA_KEY, TEST_KEY } = require('./constants/constants.js');

const { BASE_URL, EIA_KEY, TEST_KEY } = require('./constants/constants.js');

const app = express();
const baseController = require('./controllers/baseController');
const categoriesTestController = require('./controllers/categoriesTestController');

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
app.get('/api/categories/test', async (req, res) => {
  try {
    const results = await categoriesTestController(BASE_URL, EIA_KEY, '714755');
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
      `${BASE_URL}category?api_key=${EIA_KEY}&category_id=${category_id}`
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
      `${BASE_URL}series?api_key=${EIA_KEY}&series_id=PET.W_EPM0F_YPY_R10_MBBLD.4`
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
      `${BASE_URL}/series?api_key=${EIA_KEY}&series_id=${series_id}`
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

module.exports = app;
