const Sequelize = require("sequelize");

const sequelize = new Sequelize('you_database', 'your_user', 'you_password', {
  host: 'you host name',
  dialect: 'mysql',
});

sequelize.sync( {force:true});
module.exports = sequelize;
// global.sequelize = sequelize;
