
const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const { DataTypes } = require('sequelize');


const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = User;


