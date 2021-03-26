const Sequelize = require('sequelize')
const database = new Sequelize('postgres://localhost:5432/jukeboxcenter', { logging: false })

module.exports = database