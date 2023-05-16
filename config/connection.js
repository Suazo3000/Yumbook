const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('yum_book', 'root', '', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
  });