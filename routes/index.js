const express = require('express');
const router = express.Router();

//引入自定义controller
const IndexController=require('../controllers/index')
//首页路由
router.get('/',IndexController.index)
//分类页路由
router.get('/cate/:cateId',IndexController.cate)
//文章页路由
router.get('/article/:articleId',IndexController.article)
//关于我们页路由
router.get('/about',IndexController.about)

module.exports = router;
