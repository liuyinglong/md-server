# md-http
使用浏览器来访问markdown文件,可用于局域网或者公网markdown文档的分享

## install
npm install md-http -g

## use

md-http --path="your md path" --port 80

## 快速开启服务
![md-http](https://hdpublic.getlove.cn/5bdaee16948c7e5bb482b21d.gif)

## pm2 启动
	pm2 start md-http -- --port 9003 --path="your/md/path"
![md-http-pm2](https://hdpublic.getlove.cn/5bdaee21948c7e5bb482b21e.gif)

## options

- path  
markdown文件路径 默认当前目录
- port  
端口号 默认3000


## LICENSE

[MIT](http://opensource.org/licenses/MIT)
Copyright (c) 2017-present, liuyinglong









