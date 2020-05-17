//此模块作用为获取数据库的链接
var mysql = require('mysql'); //导入mysql模块
var config = require('./config')
var pool = mysql.createPool(config)
var query=function(sql,callback){
    pool.getConnection(function(err,conn){
     if(err){
      callback(err,null,null);
     }else{
      conn.query(sql,function(qerr,vals,fields){
       //释放连接
       conn.release();
       //事件驱动回调
       callback(qerr,vals,fields);
      });
     }
    });
};
module.exports=query;	//将模版导出，方便我们在别的文件中引用