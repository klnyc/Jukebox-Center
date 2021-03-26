let config

if (process.env.DATABASE_URL) {
  config = {
    logging: false,
    operatorsAliases: false,
    dialect: 'postgres',
    protocol: 'postgres',
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
} else {
  config = {
    logging: false
  }
}

const Sequelize = require('sequelize')
const database = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/jukeboxcenter', config)

module.exports = database