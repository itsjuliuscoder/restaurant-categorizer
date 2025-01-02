const express = require('express');
const { fetchDataAndCategorize } = require('../services/fetchData');

const router = express.Router();

// Route to fetch categorized restaurant data
router.post('/fetch', async (req, res) => {
  const { query, location } = req.body;

  if (!query || !location) {
    return res.status(400).json({ error: 'Query and location are required.' });
  }

  try {
    const data = await fetchDataAndCategorize(query, location);
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Error in /fetch route:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
