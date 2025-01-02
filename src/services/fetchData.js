const { fetchFromGoogle } = require('../api/googleApi');
const { fetchFromYelp } = require('../api/yelpApi');
const { unifyData } = require('./unifyData');
const { determineCuisine, determineType } = require('./categorize');

const fetchDataAndCategorize = async (query, location) => {
  try {
    const googleData = await fetchFromGoogle(query, location);
    const yelpData = await fetchFromYelp(query, location);

    const unifiedData = unifyData(googleData, yelpData);

    return unifiedData.map((data) => ({
      ...data,
      cuisine: determineCuisine(data.cuisine),
      type: determineType(data.type),
    }));
  } catch (error) {
    console.error('Error fetching and categorizing data:', error.message);
    throw error;
  }
};

module.exports = { fetchDataAndCategorize };
