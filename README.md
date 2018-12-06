# md-http
使用浏览器来访问markdown文件
## home
[https://blog.getlove.cn/nodejs/%E4%BD%BF%E7%94%A8md-http%E5%BF%AB%E9%80%9F%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2](https://blog.getlove.cn/nodejs/%E4%BD%BF%E7%94%A8md-http%E5%BF%AB%E9%80%9F%E6%90%AD%E5%BB%BA%E5%8D%9A%E5%AE%A2)


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



