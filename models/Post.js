const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const User= require("../models/User");


const Post = sequelize.define('post', {
    title: Sequelize.STRING,
    content: Sequelize.TEXT
  });

  Post.belongsTo(User);
  User.hasMany(Post);

module.exports = Post;
