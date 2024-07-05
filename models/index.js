const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite',
  logging: false,
});

const Airport = require('./airport')(sequelize);
const City = require('./city')(sequelize);
const Country = require('./country')(sequelize);

Airport.belongsTo(City, { foreignKey: 'city_id' });
Airport.belongsTo(Country, { foreignKey: 'country_id' });
City.belongsTo(Country, { foreignKey: 'country_id' });

module.exports = {
  sequelize,
  Airport,
  City,
  Country,
};
