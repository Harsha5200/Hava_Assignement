const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Airport', {
    icao_code: { type: DataTypes.STRING, allowNull: false },
    iata_code: { type: DataTypes.STRING, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    latitude_deg: { type: DataTypes.FLOAT },
    longitude_deg: { type: DataTypes.FLOAT },
    elevation_ft: { type: DataTypes.INTEGER },
    city_id: { type: DataTypes.INTEGER },
    country_id: { type: DataTypes.INTEGER },
    continent_id: { type: DataTypes.INTEGER },
    website_url: { type: DataTypes.STRING },
    created_at: { type: DataTypes.DATE },
    updated_at: { type: DataTypes.DATE }
  });
};
