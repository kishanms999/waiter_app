const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const Order=sequelize.define('ordertable',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement: true,
    allowNull:false,
    primaryKey:true
  },
  price:Sequelize.DOUBLE,
  dish:Sequelize.STRING,
  tableno:Sequelize.STRING
});

module.exports=Order;