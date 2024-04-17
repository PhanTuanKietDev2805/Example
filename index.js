const sequelize = require("./util/database");
const User= require("./models/User");
const Post= require("./models/Post");
const Comment= require("./models/Comment");



sequelize.sync()
  .then(() => {

    return Comment.create({
      content: 'Great !',
      postId: 1,   
      UserId: 1
    }
    );

    // // return User.findAll();
  
    // return User.update({email : '123456@gmail.com'}, {
    //   where : {username : 'Tuan Khang'}
    // })
  }).then((data) => {
    // data.forEach(element => {
    //   console.log(element.toJSON());
    // });

    console.log(data);
  })
   
 