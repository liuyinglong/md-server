/**
 * Created by focus on 2017/8/10.
 */

let express = require("express");
let app = express();
let config = require("../config");
let path = require("path");
let URL = require("url");
let fs = require("fs");
let ejs = require("ejs");
console.log(path.join(__dirname, "../template"));
app.set('views', path.join(__dirname, "../template"));
app.set('view engine', 'ejs');

let FileTypes = require("../file/fileType");
let mdPath = config.path ? path.resolve(config.path) : process.cwd();

let mdFileList = new FileTypes(mdPath, "md").fileList;


//markDown 文件相对路径
let mdRelativePath = mdFileList.map(function (itemPath) {
    return path.relative(mdPath, itemPath);
});

//md文件目录
app.use(function (req, res, next) {
    let reqPath = req.path;
    if (!/\.md$/.test(reqPath)) {
        reqPath = reqPath + ".md";
    }
    let filePath = path.join(mdPath, reqPath);
    if (!fs.existsSync(filePath)) {
        next();
    }
    new Promise(function (resolve, reject) {
        fs.readFile(filePath, "utf8", function (err, data) {
            if (err) {
                reject(err);
            }
            resolve(data);
        })
    }).then(function (data) {
        res.render("articleTemplate", {
            title: "",
            text: data
        });
    })
});

//静态资源目录
let staticPath = config.static ? path.resolve(config.static) : mdPath;
app.use(express.static(staticPath));

//生成静态文件
if (config.static) {

}


app.get("/", function (req, res, next) {
    next();
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        err: err.status
    });
});

app.listen(3000);