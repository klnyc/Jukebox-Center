const Sequelize = require("sequelize")
const database = require("./sequelize")
const crypto = require("crypto")

const Users = database.define("users", {
    name: {
        type: Sequelize.STRING
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
        get() { return () => this.getDataValue("password") }
    },
    salt: {
        type: Sequelize.STRING,
        get() { return () => this.getDataValue("salt") }
    }
})

Users.generateSalt = () => crypto.randomBytes(16).toString("base64")
Users.encryptPassword = (text, salt) => crypto.createHash("RSA-SHA256").update(text).update(salt).digest("hex")
Users.prototype.correctPassword = function (password) {
    return Users.encryptPassword(password, this.salt()) === this.password()
}

const setSaltAndPassword = (user) => {
    if (user.changed("password")) {
        user.salt = Users.generateSalt()
        user.password = Users.encryptPassword(user.password(), user.salt())
    }
}

Users.beforeCreate(setSaltAndPassword)
Users.beforeUpdate(setSaltAndPassword)

module.exports = Users