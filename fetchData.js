const { sequelize, Airport, City, Country } = require('./models');

async function fetchData() {
  try {
    const airports = await Airport.findAll({ include: [City, Country] });
    console.log(JSON.stringify(airports, null, 2));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
