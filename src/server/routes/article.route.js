var express = require('express');
var router = express.Router();
var articleCtrl = require('../controllers/article.controller');


router.post('/addList',articleCtrl.articlePost); //引用 article.controller 裡的 Function
router.get('/getList',articleCtrl.articleGet);
router.post('/updateList',articleCtrl.articlePut);
router.post('/changeStatus',articleCtrl.articleChange);
router.post('/removeList',articleCtrl.articleRemove);




module.exports = router;