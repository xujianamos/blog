const Sequelize=require('sequelize')
const db=require('../db')
const Info=db.define('Info',{
    //主键
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    //博客名称
    title:{
        type:Sequelize.STRING(30),
        allowNull: false
    },
    //副标题
    subtitle:{
        type:Sequelize.STRING(30),
        allowNull:false
    },
    //关于我们
    about:{
        type:Sequelize.TEXT,
        allowNull:false
    }
},{
    underscored:true,
    tableName:'info'

})
module.exports=Info