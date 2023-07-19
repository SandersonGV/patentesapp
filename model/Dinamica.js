const Sequelize = require('sequelize');
const database = require('../helpers/db');
const jogo = require('./Jogo');
 
const Dinamica = database.define('dinamica', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ativo: {
        type: Sequelize.BOOLEAN
    }
})
Dinamica.hasMany(jogo)

module.exports = Dinamica;