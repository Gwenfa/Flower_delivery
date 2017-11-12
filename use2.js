var express=require('express');

var app=express();

var birds = require('./router/router');
// var data={
//         name:"你大爷",
//         age:"好老了"
//     }

//拦截所以api接口设置头部信息（不能放底部，why？）
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name");
  //设置前端的这些ajax请求方法'GET,POST,PUT,HEAD,DELETE,OPTIONS'，都有权限调接口
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Credentials', true);

  // if ('OPTIONS' == req.method) {
  //     res.send(200);
  // } else {
      next();

});

app.use('/api', birds);

app.listen(3000,function(){
    console.log("大爷您好，你的node服务已启动！请在浏览器窗口打开URL：localhost:3000")
})