var articleModule = require('../modules/article.module');

/* POST新增 */
const articlePost = (req, res) => {
    const insertValues = req.body; //取得欄位值
    articleModule.NewArticle (insertValues).then((result) => {
      console.log(result); // 成功回傳result結果
    }).catch((err) => { return console.log(err); }); // 失敗回傳錯誤訊息
  };

/* GET 取得 */
const articleGet = (req, res) => {
    articleModule.selectArticle().then((result) => {
      res.send(result); // 成功回傳result結果
    }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
  };  

/* POST修改 */
const articlePut = (req, res) => {
    // 取得修改參數
    const insertValues = req.body;
    articleModule.modifyArticle(insertValues).then((result) => {
        res.send(result); // 回傳修改成功訊息
    }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
  };

  /*改變狀態 POST */
  const articleChange = (req, res) => {
    // 取得修改參數
    const insertValues = req.body;
    articleModule.changeArticle(insertValues).then((result) => {
        res.send(result); // 回傳修改成功訊息
    }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
  };

/* POST刪除 */
const articleRemove = (req, res) => {
    // 取得修改參數
    const insertValues = req.body;
    articleModule.removeArticle(insertValues).then((result) => {
        res.send(result); // 回傳修改成功訊息
    }).catch((err) => { return res.send(err); }); // 失敗回傳錯誤訊息
  };


  module.exports.articlePost = articlePost;
  module.exports.articleGet = articleGet;
  module.exports.articlePut = articlePut;
  module.exports.articleChange = articleChange;
  module.exports.articleRemove = articleRemove;