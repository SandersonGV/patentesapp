const Sequelize = require('sequelize');
const database = require('../helpers/db');
const dinamica = require('./Dinamica');
const desafio = require('./Desafio');
 
const Jogo = database.define('jogo', {
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

Jogo.belongsTo(dinamica)
Jogo.hasMany(desafio)

module.exports = Jogo;