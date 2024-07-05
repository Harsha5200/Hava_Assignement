const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Country', {
    name: { type: DataTypes.STRING, allowNull: false },
    alt_name: { type: DataTypes.STRING },
    country_code_two: { type: DataTypes.STRING },
    country_code_three: { type: DataTypes.STRING },
    mobile_code: { type: DataTypes.INTEGER },
    continent_id: { type: DataTypes.INTEGER },
    country_flag: { type: DataTypes.STRING }
  });
};
