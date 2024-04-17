const Sequelize = require('sequelize');

// Khởi tạo kết nối đến cơ sở dữ liệu
const sequelize = new Sequelize('example', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;