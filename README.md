API Documentation

Setup

Clone the repository or download the project files.
Install dependencies:
npm install

Ensure you have a Database.xlsx file in the root directory with sheets named "airport", "city", and "country".
Populate the database:
node populateDb.js

Start the server:
node app.js


The server will start running on http://localhost:3000.
API Endpoints
Get Airport Information
Retrieves detailed information about an airport based on its IATA code.

URL: /api/airport
Method: GET
URL Params:

Required: iata_code=[string]



Sample Request
GET http://localhost:3000/api/airport?iata_code=AGR
Successful Response
json{
  "airport": {
    "id": 145,
    "icao_code": "VIAG",
    "iata_code": "AGR",
    "name": "Agra Airport / Agra Air Force Station",
    "type": "medium_airport",
    "latitude_deg": 27.157683,
    "longitude_deg": 77.960942,
    "elevation_ft": 551,
    "address": {
      "city": {
        "id": 436,
        "name": "Agra",
        "country_id": 76,
        "is_active": true,
        "lat": 27.18,
        "long": 78.02
      },
      "country": {
        "id": 76,
        "name": "India",
        "country_code_two": "IN",
        "country_code_three": "IND",
        "mobile_code": 91,
        "continent_id": 1
      }
    }
  }
}
Error Response

Code: 404 NOT FOUND
json{ "error": "Airport not found" }

Code: 500 INTERNAL SERVER ERROR
json{ "error": "Internal server error" }


Usage Notes

The API uses IATA codes to identify airports. Make sure to use valid IATA codes when making requests.
If the country information is not available for an airport, the country field in the response will be null.
Ensure that your Database.xlsx file is up-to-date and contains all the necessary information for airports, cities, and countries.

Troubleshooting

If you encounter issues with data not being found, run node fetchData.js to check the contents of your database.
Ensure that your Excel file is properly formatted and that the sheet names match exactly: "airport", "city", and "country".
Check the console logs when running populateDb.js to verify that data is being read correctly from the Excel file.