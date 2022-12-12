const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas', 'root', '1590', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;