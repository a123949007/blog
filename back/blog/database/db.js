var mysql = require('mysql');
var pool = mysql.createPool({      //创建mysql实例
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'!Aa123949007',
  database:'blog',
  connectionLimit:10,
  timezone:"08:00", //时区
  multipleStatements: true //允许执行多条语句
});

// 查询
exports.find = function(sql,callback){
  pool.getConnection(function(err,connection){
    if(err){
      callback(err,null,null);
    }else{
      connection.query(sql,function(error,values,fields){
        //释放连接
        connection.release();
        //事件驱动回调
        callback(error,values,fields);
      });
    }
  });
};

// 插入、更新、删除
exports.edit = function (sql,params,callback){
  pool.getConnection(function(err,connection){
    if(err){
      callback(err,null,null);
    }else{
      connection.query(sql,params,function(error,values,fields){
        //释放连接
        connection.release();
        //事件驱动回调
        callback(error,values,fields);
      });
    }
  });
}

