var mariadb = require('mariadb/callback');
var con = require('../../config/DBconfig');

const pool = mariadb.createPool({ 
    port:con.port, // 連接阜號
    host: con.host, // 主機名稱 
    user: con.user, // 用戶名稱
    password: con.password, // 資料庫密碼
    database: con.database, // 資料庫名稱
    connectionLimit: con.connectionLimit //連線池限制
});

/* POST 新增 */
const NewArticle = (insertValues) => {
    return new Promise((resolve, reject) => {
      pool.getConnection((connectionError, conn) => { // 資料庫連線
        if (connectionError) {
            reject(connectionError); // 若連線有問題回傳錯誤
        } else {
          conn.query('INSERT INTO article (tittle,content,status) value (?,?,?)',
          [insertValues.title,insertValues.content,false],(error, result) => { // Article資料表寫入一筆資料
            if (error) {
              console.error('SQL error: ', error); // 寫入資料庫有問題時回傳錯誤
              reject(error);
            } else if (result.affectedRows == 1) {
              resolve(`新增成功！ _id: ${result.insertId}`); // 寫入成功回傳寫入id
            }
            conn.release();
          });
        }
    });
   });
  };

/*  Article GET 取得  */
const selectArticle = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection((connectionError, conn) => { // 資料庫連線
        if (connectionError) {
          reject(connectionError); // 若連線有問題回傳錯誤
        } else {
          conn.query( `SELECT * FROM article` , (error, result) => {  // Article撈取所有欄位的值組
              if (error) {
                console.error('SQL error: ', error);
                reject(error); // 寫入資料庫有問題時回傳錯誤
              } else {
                resolve(result); // 撈取成功回傳 JSON 資料
              }
              conn.release();
            }
          );
        }
      });
    });
  };
  
  /* POST 修改內容 */
  const modifyArticle = (insertValues) => {
    return new Promise((resolve, reject) => {
      pool.getConnection((connectionError, conn) => { // 資料庫連線
        if (connectionError) {
          reject(connectionError); // 若連線有問題回傳錯誤
        } else { // Article資料表修改指定id一筆資料
            conn.query('UPDATE article SET tittle=?,content=? WHERE _id = ?',[insertValues.title,insertValues.content,insertValues.id], (error, result) => {
            if (error) {
              console.error('SQL error: ', error);// 寫入資料庫有問題時回傳錯誤
              reject(error);
            } else if (result.affectedRows === 0) { // 寫入時發現無該筆資料
              resolve('請確認修改Id！');
            } else if (result.affectedRows == 1) { // 寫入成功
                resolve(`修改成功！ _id: ${result.insertId}`);
            } else { 
              resolve('資料無異動');
            }
            conn.release();
          });
        }
      });
    });
  };  

/* POST 修改狀態 */
const changeArticle = (insertValues) => {
    return new Promise((resolve, reject) => {
      pool.getConnection((connectionError, conn) => { // 資料庫連線
        if (connectionError) {
          reject(connectionError); // 若連線有問題回傳錯誤
        } else { // Article資料表修改指定id一筆資料
            conn.query('UPDATE article SET status=? WHERE _id = ?',[true,insertValues.id], (error, result) => {
            if (error) {
              console.error('SQL error: ', error);// 寫入資料庫有問題時回傳錯誤
              reject(error);
            } else if (result.affectedRows === 0) { // 寫入時發現無該筆資料
              resolve('請確認Id！');
            } else if (result.affectedRows == 1) { // 寫入成功
                resolve(`狀態修改成功！ _id: ${result.insertId}`);
            } else { 
              resolve('資料無異動');
            }
            conn.release();
          });
        }
      });
    });
  };  


/* POST 修改狀態 */
const removeArticle = (insertValues) => {
    return new Promise((resolve, reject) => {
      pool.getConnection((connectionError, conn) => { // 資料庫連線
        if (connectionError) {
          reject(connectionError); // 若連線有問題回傳錯誤
        } else { // Article資料表修改指定id一筆資料
            conn.query('DELETE FROM article WHERE _id = ?',[insertValues.id], (error, result) => {
            if (error) {
              console.error('SQL error: ', error);// 寫入資料庫有問題時回傳錯誤
              reject(error);
            } else if (result.affectedRows === 0) { // 寫入時發現無該筆資料
              resolve('請確認Id！');
            } else if (result.affectedRows == 1) { // 寫入成功
                resolve(`刪除成功！ _id: ${result.insertId}`);
            } else { 
              resolve('資料無異動');
            }
            conn.release();
          });
        }
      });
    });
  };  
  
  
  module.exports.NewArticle = NewArticle;
  module.exports.selectArticle = selectArticle;
  module.exports.modifyArticle = modifyArticle;
  module.exports.removeArticle = removeArticle;
  module.exports.changeArticle = changeArticle;