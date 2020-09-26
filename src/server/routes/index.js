var express = require('express');
var router = express.Router();
var mariadb = require('mariadb/callback');
var con = require('../../config/DBconfig');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* mariadb連線測試 */
router.get('/sql', (req, res) => {
  const pool = mariadb.createPool({ port:con.port, // 連接阜號
    host: con.host, // 主機名稱 
    user: con.user, // 用戶名稱
    password: con.password, // 資料庫密碼
    database: con.database, // 資料庫名稱,
    connectionLimit: con.connectionLimit });
  pool.getConnection((err, conn) => {
  if (err) {
    console.log("not connected due to error: " + err);
  } else {
    console.log("connected ! connection id is " + conn.threadId);
    res.send('連線成功!');
    conn.end(); //release to pool
  }
});
});


module.exports = router;
