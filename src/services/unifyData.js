const unifyData = (googleData, yelpData) => {
    return googleData.map((googleItem) => {
        const yelpMatch = yelpData.find((yelpItem) => yelpItem.name === googleItem.name);

        return {
        name: googleItem.name,
        cuisine: googleItem.types ? googleItem.types[0] : 'Unknown',
        type: yelpMatch ? yelpMatch.categories[0].title : 'Unknown',
        rating: yelpMatch ? yelpMatch.rating : googleItem.rating,
        };
    });
};

module.exports = { unifyData };
  