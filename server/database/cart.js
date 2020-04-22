const Sequelize = require('sequelize')
const database = require('./sequelize')

const Cart = database.define('cart', {
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Cart