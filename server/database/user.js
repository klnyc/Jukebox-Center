const Sequelize = require('sequelize')
const database = require('./database')
const crypto = require('crypto')

const User = database.define('users', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: true }
    },
    address: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: { isEmail: true, notEmpty: true }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: { notEmpty: true },
        get() { return () => this.getDataValue('password') }
    },
    salt: {
        type: Sequelize.STRING,
        get() { return () => this.getDataValue('salt') }
    }
})

User.generateSalt = () => crypto.randomBytes(16).toString('base64')
User.encryptPassword = (text, salt) => crypto.createHash('RSA-SHA256').update(text).update(salt).digest('hex')
User.prototype.correctPassword = function (password) {
    return User.encryptPassword(password, this.salt()) === this.password()
}

const setSaltAndPassword = (user) => {
    if (user.changed('password')) {
        user.salt = User.generateSalt()
        user.password = User.encryptPassword(user.password(), user.salt())
    }
}

User.beforeCreate(setSaltAndPassword)
User.beforeUpdate(setSaltAndPassword)

module.exports = User