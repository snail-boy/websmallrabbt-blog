var express = require('express');

const log4js= require('./log-config')
const logger = log4js.getLogger()//根据需要获取logger

var app = express();

log4js.useLogger(app,logger)  // 把每次请求的信息写入日志



app.listen(3000);
console.log('app started at port 3000...');
