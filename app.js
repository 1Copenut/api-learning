// https://www.freecodecamp.org/news/private-api-keys/

require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');
const convert = require('xml-js');
const rateLimit = require('express-rate-limit');
const app = express();
const port = 3000;

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
    const searchString = `q${res.query.q}`;
    const response = await fetch(`https://www.goodreads.com/search/index.xml?key=${process.env.GOODREADS_API_KEY}&${searchString}`);
    const xml = await response.text();
    const json = convert.xml2json(xml, { compact: true, spaces: 2 });
    const results = JSON.parse(json).Goodreads.Response.search.results;

    return res.json({
      success: true,
      results
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

app.listen(port, () => console.log(`App listening on port ${port}`));