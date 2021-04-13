#1, 依赖介绍

## 1，babel-helper-vue-jsx-merge-props  vue jsx merge
https://github.com/vuejs/babel-helper-vue-jsx-merge-props 作者尤大

## 2， deepmerge https://github.com/TehShrike/deepmerge
#### 对象深度合并

```
const x = {
	foo: { bar: 3 },
	array: [{
		does: 'work',
		too: [ 1, 2, 3 ]
	}]
}

const y = {
	foo: { baz: 4 },
	quux: 5,
	array: [{
		does: 'work',
		too: [ 4, 5, 6 ]
	}, {
		really: 'yes'
	}]
}

const output = {
	foo: {
		bar: 3,
		baz: 4
	},
	array: [{
		does: 'work',
		too: [ 1, 2, 3 ]
	}, {
		does: 'work',
		too: [ 4, 5, 6 ]
	}, {
		really: 'yes'
	}],
	quux: 5
}

merge(x, y) // => output
```

## 3, normalize-wheel npm install normalize-wheel --save
跨多个浏览器的鼠标滚轮标准化

## 4, resize-observer-polyfill  
实现基于MutationObserver，如果第一个不受支持，则使用Mutation Events作为回退，因此除非DOM更改，否则不会进行轮询。不修改观察到的元素。处理CSS过渡/动画，并且可以观察由动态CSS伪类引起的变化，例如:hover。
npm install resize-observer-polyfill --save-dev

推荐阅读 https://juejin.im/post/5b4f0c56e51d4518ef2cda0f

eg: 
```$xslt
import ResizeObserver from 'resize-observer-polyfill';
 
const ro = new ResizeObserver((entries, observer) => {
    for (const entry of entries) {
        const {left, top, width, height} = entry.contentRect;
 
        console.log('Element:', entry.target);
        console.log(`Element's size: ${ width }px x ${ height }px`);
        console.log(`Element's paddings: ${ top }px ; ${ left }px`);
    }
});
 
ro.observe(document.body);
```
例子在 https://github.com/websmallrabbit/websmallrabbit-blog/blob/master/src/examples/resize-observer-polyfill.vue

## 5，throttle-debounce 
今天阅读的 npm 模块是 throttle-debounce，它提供了 throttle 和 debounce 两个函数：throttle 的含义是节流，debounce 的含义是防抖动，通过它们可以限制函数的执行频率，避免短时间内函数多次执行造成性能问题，当前包版本为 2.0.1，周下载量为 6.3 万。
作者：elvinnn
链接：https://juejin.im/post/5b88a54751882542ea13d253

## 6， algoliasearch
Algolia Search - 使用Javascript实现前端实时搜索

在网站开发中，很重要的一个功能那就是搜索了。对于一个访问量很大的网站来说，对于所有的搜索请求直接读取数据库来完成将会造成非常大的负荷。两种办法可以有效地解决以上问题，第一种就是缓存，memcached,redis等都很有名气，在这里就不予赘述了。
那么第二种就是使用云搜索。什么是云搜索？类似于CDN，我们把数据库内可以用于被搜索的信息推送至云端，然后用户在我们的网站进行搜索时，实际上搜索请求并没有发送给我们的服务器，而是被传递到云服务器进行搜索，并返回相应的结果。这样的解决方案可以大大降低网站的延迟，并提高应用的性能。现在比较有名的Algolia就提供了云搜索的服务
作者：EagleMaze 
来源：CSDN 
原文：https://blog.csdn.net/lgyaxx/article/details/70666835 
版权声明：本文为博主原创文章，转载请附上博文链接！

## 7， babel-cli
利用babel-cli搭建支持ES6的node环境
现在ES6盛行，开始大量使用ES6的特性敲代码，但限于Node.js本身对ES6的特性支持的不够完备，那么需要借助于其他工具来完成。

基本上，现在都直接写ES6的代码，然后使用babel-cli提供的babel转换成ES5或者使用babel-node直接运行ES6的代码。
[推荐阅读文档地址](https://www.cnblogs.com/kongxianghai/p/7196176.html)

## 8, pm2
Node.js的高级生产流程管理器

PM2 的主要特性

内建负载均衡（使用 Node cluster 集群模块）

后台运行

0 秒停机重载，我理解大概意思是维护升级的时候不需要停机.

具有 Ubuntu 和 CentOS 的启动脚本

停止不稳定的进程（避免无限循环）

控制台检测

提供 HTTP API

远程控制和实时的接口 API ( Nodejs 模块,允许和 PM2 进程管理器交互 )

作者：luffyZh
链接：https://juejin.im/post/5be406705188256dbb5176f9
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

## 9, bluebird
Bluebird 解决了 callback 地狱的问题，它把 callback 方法的调用，抽象成 Promise 对象之间的链式调用。
推荐阅读[使用 Bluebird 开发异步的 JavaScript 程序](https://www.ibm.com/developerworks/cn/web/wa-lo-bluebird-develop-asynchronous-javascript/index.html) 和 [Promise实现之bluebird 5分钟入门教程](https://my.oschina.net/goskyblue/blog/534634)
---
```$xslt

var fs = require('fs');
var Promise = require('bluebird');
var readFileAsync = Promise.promisify(fs.readFile)

readFileAsync('static/1.txt')
    .then(function(data1){
        console.log(data1);
        return readFileAsync('static/2.txt');
    })
    .then(function(data2){
        console.log(data2);
    })
    .catch(function(err){
        console.error(err)
    })


```
[此插件例子](https://github.com/websmallrabbit/websmallrabbit-blog/tree/master/src/examples/bluebirddemo.js)

    
## 10, underscore
现在问题来了，Array有map()和filter()方法，可是Object没有这些方法。此外，低版本的浏览器例如IE6～8也没有这些方法，怎么办？

方法一，自己把这些方法添加到Array.prototype中，然后给Object.prototype也加上mapObject()等类似的方法。

方法二，直接找一个成熟可靠的第三方开源库，使用统一的函数来实现map()、filter()这些操作。

我们采用方法二，选择的第三方库就是underscore。

正如jQuery统一了不同浏览器之间的DOM操作的差异，让我们可以简单地对DOM进行操作，underscore则提供了一套完善的函数式编程的接口，让我们更方便地在JavaScript中实现函数式编程。

推荐阅读[廖雪峰的官方网站](https://www.liaoxuefeng.com/wiki/1022910821149312/1056305537410240)

[此插件例子](https://github.com/websmallrabbit/websmallrabbit-blog/tree/master/src/examples/underscore.js)

## 11, moment
JavaScript 日期处理类库
[官网](http://momentjs.cn/)

```$xslt
moment().format('MMMM Do YYYY, h:mm:ss a'); // 七月 15日 2019, 12:40:00 凌晨
moment().format('dddd');                    // 星期一
moment().format("MMM Do YY");               // 7月 15日 19
moment().format('YYYY [escaped] YYYY');     // 2019 escaped 2019
moment().format();                          // 2019-07-15T00:40:00+08:00
```

## 12, express-favicon

```$xslt
const express = require('express');
const favicon = require('express-favicon');
 
const app = express();
 
app.use(favicon(__dirname + '/public/favicon.png'));
 
// Add your routes here, etc.
 
const server = app.listen(3000, function(){
    console.log('server is running at %s .', server.address().port);
});
```

##13, fastclick 
解决移动端300毫秒的延迟

推荐阅读 [fastclick的介绍和使用](https://www.jianshu.com/p/67bae6dfca90)

## 14, good-storage
存储搜索历史记录时使用good-storage 插件直接存数组，因为原生的localstorage api 需要将数组转换为字符串存储 参考文档
https://github.com/ustbhuangyi/storage

[此插件例子](https://github.com/websmallrabbit/websmallrabbit-blog/tree/master/src/examples/good-storage/index.vue)

## 15, clipboard.js
现代化的拷贝文字
不依赖flash, 不依赖其他框架，gzip压缩后只有3kb大小

npm install clipboard --save
推荐阅读

[html5页面ClipboardJS实现点击复制功能](https://blog.csdn.net/mp624183768/article/details/82256164)

[此插件例子](https://github.com/websmallrabbit/websmallrabbit-blog/tree/master/src/examples/clipboard/index.html)

##16, crypto
加密算法
推荐阅读[crypto](https://www.liaoxuefeng.com/wiki/1022910821149312/1023025778520640)

##17， log4js 
node项目中 日志管理插件
[此插件例子](https://github.com/websmallrabbit/websmallrabbit-blog/tree/master/src/examples/log4js)

#### 推荐阅读
[NodeJS写日志_Log4js使用详解+常见艰难的解决](https://blog.csdn.net/cdnight/article/details/50857268)

