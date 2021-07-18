const Sequelize=require('sequelize')
const db=require('../db')
//定义model
const Cate=db.define('Cate',{
    //分类id
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    //分类名称
    name:{
        type:Sequelize.STRING(20),
        allowNull: false
    }},{
    //是否支持驼峰
    underscored:true,
    //数据库表名
    tableName:'cate'
})
module.exports=Cate