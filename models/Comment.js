const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const { DataTypes } = require('sequelize');
const User= require("../models/User");
const Post= require("../models/Post");


const Comment = sequelize.define('Comment', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

Comment.belongsTo(Post);
Comment.belongsTo(User);  

module.exports = Comment;

  