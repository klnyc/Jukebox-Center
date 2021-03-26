const Sequelize = require('sequelize')
const database = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/jukeboxcenter?ssl=true', { logging: false })

module.exports = database