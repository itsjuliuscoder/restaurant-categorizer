const determineCuisine = (categories) => {
    const cuisines = ['Mexican', 'Italian', 'Chinese', 'Japanese', 'American', 'French'];
return categories.find((category) => cuisines.includes(category)) || 'General';
};

const determineType = (categories) => {
    const types = ['Fast Food', 'Bar', 'Cafe', 'Fine Dining'];
    return categories.find((category) => types.includes(category)) || 'Other';
};

module.exports = { determineCuisine, determineType };
  