const { sequelize, Airport, City, Country } = require('./models');
const xlsx = require('xlsx');

async function populateDatabase() {
  // Load the Excel file
  const workbook = xlsx.readFile('Database.xlsx');

  // Log sheet names to verify
  console.log('Sheet names:', workbook.SheetNames);

  const airportSheet = workbook.Sheets['airport'];
  const citySheet = workbook.Sheets['city'];
  const countrySheet = workbook.Sheets['country'];

  // Convert sheets to JSON
  const airports = xlsx.utils.sheet_to_json(airportSheet);
  const cities = xlsx.utils.sheet_to_json(citySheet);
  const countries = xlsx.utils.sheet_to_json(countrySheet);

  // Log data to verify
  console.log('Airports:', airports);
  console.log('Cities:', cities);
  console.log('Countries:', countries);

  // Sync the database
  await sequelize.sync({ force: true });

  // Populate Country table
  await Country.bulkCreate(countries);

  // Populate City table
  await City.bulkCreate(cities);

  // Populate Airport table
  await Airport.bulkCreate(airports);

  console.log('Database populated successfully!');
}

populateDatabase().catch(err => {
  console.error('Error populating database:', err);
});
