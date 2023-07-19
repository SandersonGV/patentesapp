const Sequelize = require('sequelize');
const database = require('../helpers/db');
const jogo = require('./Jogo');
const opcao = require('./Opcao');
 
const Desafio = database.define('desafio', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descicao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ativo: {
        type: Sequelize.BOOLEAN
    }
})

Desafio.belongsTo(jogo)
Desafio.hasMany (opcao)

module.exports = Desafio;