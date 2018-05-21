/**
 * Created by focus on 2017/8/9.
 */

let fs = require("fs");
let EventEmitter = require('events').EventEmitter;
let fsPath = require("path");

function TypeFile(path) {

}

TypeFile.prototype = {
    /**
     * 获取path目录下 所有fileType类型的文件
     * @param path
     * @param fileType
     * @returns {Array}
     */
    getFiles: function (path, fileType) {
        let self = this;
        let itemList = fs.readdirSync(path);
        let fileTypeList = [];
        itemList.forEach(function (item) {
            let tempPath = fsPath.join(path, item);
            if (fs.lstatSync(tempPath).isDirectory()) {
                fileTypeList = fileTypeList.concat(self.getFiles(tempPath, fileType));
                return;
            }
            if (fs.lstatSync(tempPath).isFile()) {
                if (item.split(".").pop() === fileType) {
                    fileTypeList.push(tempPath);
                }
            }
        });
        return fileTypeList;
    },
};

module.exports = TypeFile;
