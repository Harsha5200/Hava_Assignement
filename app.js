const express = require('express');
const { Airport, City, Country } = require('./models');

const app = express();
const port = 3000;

app.get('/api/airport', async (req, res) => {
  const { iata_code } = req.query;

  console.log(`Received query: iata_code=${iata_code}`);

  try {
    const airport = await Airport.findOne({
      where: { iata_code },
      include: [
        { model: City, include: [Country] },
        Country
      ]
    });

    if (!airport) {
      console.log('Airport not found');
      return res.status(404).json({ error: 'Airport not found' });
    }

    const response = {
      airport: {
        id: airport.id,
        icao_code: airport.icao_code,
        iata_code: airport.iata_code,
        name: airport.name,
        type: airport.type,
        latitude_deg: airport.latitude_deg,
        longitude_deg: airport.longitude_deg,
        elevation_ft: airport.elevation_ft,
        address: {
          city: airport.City ? {
            id: airport.City.id,
            name: airport.City.name,
            country_id: airport.City.country_id,
            is_active: airport.City.is_active,
            lat: airport.City.lat,
            long: airport.City.long
          } : null,
          country: airport.Country ? {
            id: airport.Country.id,
            name: airport.Country.name,
            country_code_two: airport.Country.country_code_two,
            country_code_three: airport.Country.country_code_three,
            mobile_code: airport.Country.mobile_code,
            continent_id: airport.Country.continent_id
          } : null
        }
      }
    };

    console.log('Response:', JSON.stringify(response, null, 2));

    res.json(response);
  } catch (error) {
    console.error('Error fetching airport data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
