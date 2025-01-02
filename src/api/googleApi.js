const axios = require('axios');
const { GOOGLE_API_KEY } = require('../utils/config');

const fetchFromGoogle = async (query, location) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${query}&location=${location}&key=${GOOGLE_API_KEY}`;
    const response = await axios.get(url);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching from Google API:', error.message);
    throw error;
  }
};

module.exports = { fetchFromGoogle };
