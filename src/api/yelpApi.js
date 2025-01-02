const axios = require('axios');
const { YELP_API_KEY } = require('../utils/config');

const fetchFromYelp = async (term, location) => {
  try {
    const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`;
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${YELP_API_KEY}` },
    });
    return response.data.businesses;
  } catch (error) {
    console.error('Error fetching from Yelp API:', error.message);
    throw error;
  }
};

module.exports = { fetchFromYelp };
