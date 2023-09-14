const { DataTypes } = require('sequelize');
const sequelize = require('../config/connectDB');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.STRING, 
    primaryKey: true,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  order_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Order;