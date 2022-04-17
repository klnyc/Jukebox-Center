const Sequelize = require("sequelize");
const database = require("./sequelize");

const Orders = database.define("orders", {
  address: {
    type: Sequelize.TEXT,
  },
  purchased: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Orders;
