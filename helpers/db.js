const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://malocagames:A91AgTwjGMDKs1XMCIxLZobsK9NZ99UF@dpg-cin2eu18g3nafl2mn3bg-a.oregon-postgres.render.com/potentesdb', {dialect: 'postgres'});

module.exports = sequelize;