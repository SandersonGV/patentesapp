const Sequelize = require('sequelize');
const database = require('../helpers/db');
const desafio = require('./Desafio');
 
const Opcao = database.define('opcao', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    valor: {
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

Opcao.belongsTo (desafio)

module.exports = Jogo;