/**
 * Created by focus on 2017/8/10.
 */

let express = require("express");
let app = express();
let config = require("../config");
let path = require("path");

let FileTypes = require("../file/fileType");
let mdPath = config.path ? path.resolve(config.path) : process.cwd();

let mdFileList = new FileTypes(mdPath, "md").fileList;

let mdRelativePath = mdFileList.map(function (itemPath) {
    return path.relative(mdPath, itemPath);
});


if (config.static) {
    let staticPath = config.path ? path.resolve(config.static) : process.cwd();
    app.use(express.static(staticPath));
}

