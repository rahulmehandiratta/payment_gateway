const Sequelize = require("sequelize");

const sequelize = new Sequelize('razorpay', 'root', 'Rahul@123', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

sequelize.sync( {force:true});
module.exports = sequelize;
// global.sequelize = sequelize;