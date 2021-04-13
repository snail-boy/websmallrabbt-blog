title: My Cleaver demo!
author:
    name: websmallrabbit
    url: https://github.com/websmallrabbit/websmallrabbit-blog/tree/master/src/examples/cleaver
output: cleaver.html
encoding: utf-8

--

# 前言

互联网时代，以浏览器作为入口，已经有越来越多的桌面应用被web应用所取代。微软最赚钱的Office办公软件，也正在被免费的w                                                                                   eb应用所吞噬。

Cleaver基于HTML5，用最短的时间做出超炫幻灯片。你还会坚持PowerPoint吗？

--

# 目录

1. Cleaver介绍
2. Cleaver安装
3. Cleaver基本使用
4. Cleaver配置选项option
5. 用Cleaver制作一个幻灯片

--

## 1. Cleaver介绍

30-second Slideshows for Hackers. http://jdan.github.io/cleaver/

--

## 2. Cleaver安装

```bash
~ cd /home/conan/nodejs
~ mkdir nodejs-cleaver && cd nodejs-cleaver
~ sudo npm install cleaver
cleaver@0.5.3 node_modules\cleaver
├── q@0.9.6
├── marked@0.2.10
├── highlight.js@7.3.0
├── mustache@0.7.0
├── optimist@0.3.5 (wordwrap@0.0.2)
└── js-yaml@2.1.0 (esprima@1.0.4, argparse@0.1.15)
```

--

## 3. Cleaver基本使用

执行cleaver命令，解析一个markdown文件

用cleaver自带的例子
```bash
~ cleaver node_modules/cleaver/examples/basic.md

~ ls -l
-rw-rw-r-- 1 conan conan 12211 12月  4 15:39 basic.html
drwxr-xr-x 4 conan conan  4096 12月  4 15:37 node_modules

~ firefox basic.html
```

![example](http://blog.fens.me/wp-content/uploads/2013/12/cleaver-firefox.png)

--

## 4. Cleaver配置选项option

--

## 5. 用Cleaver制作一个幻灯片
