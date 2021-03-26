let configuraton

if (process.env.DATABASE_URL) {
    configuraton = {
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
    configuraton = { 
        logging: false 
    }
}

const Sequelize = require('sequelize')
const database = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/jukeboxcenter', configuraton)

module.exports = database