const Sequelize = require('sequelize');

const connection = new Sequelize('${database_name}', '${user}', '${password}', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;