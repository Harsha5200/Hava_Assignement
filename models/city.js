const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('City', {
    name: { type: DataTypes.STRING, allowNull: false },
    alt_name: { type: DataTypes.STRING },
    country_id: { type: DataTypes.INTEGER },
    is_active: { type: DataTypes.BOOLEAN, defaultValue: true },
    lat: { type: DataTypes.FLOAT },
    long: { type: DataTypes.FLOAT }
  });
};
