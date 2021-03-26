const Sequelize = require('sequelize')
const database = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/jukeboxcenter', { logging: false })

module.exports = database