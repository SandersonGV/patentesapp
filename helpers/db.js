const Sequelize = require('sequelize');
require('dotenv').config()
const {DB_CONNSTRING} = process.env
const sequelize = new Sequelize(DB_CONNSTRING, {dialect: 'postgres'});

module.exports = sequelize;