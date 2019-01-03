//文章列表
exports.SELECT_ARTICLE_LIST = 'select * from article_list';
exports.INSERT_ARTICLE_LIST = 'insert into article_list(Id,title,author,summary,type) values(0,?,?,?,?)';
exports.UPDATE_ARTICLE_LIST = 'update article_list SET title = ?,author = ?,summary = ?,type = ? where id = ?';
exports.DELETE_ARTICLE_LIST = 'delete from article_list where id=?';