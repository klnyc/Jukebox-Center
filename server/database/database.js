const database = require("./sequelize");
const Users = require("./users");
const Albums = require("./albums");
const Orders = require("./orders");
const Cart = require("./cart");

Users.hasMany(Orders);
Orders.belongsTo(Users);
Albums.belongsToMany(Orders, { through: Cart });
Orders.belongsToMany(Albums, { through: Cart });

module.exports = database;
