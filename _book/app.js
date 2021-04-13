var fs=require('fs');
var data=fs.readFile('index.html',function(err, data){
    if(err)
        console.log('读取文件时发生错误！11');
    else
        console.log(data.toString());
});
