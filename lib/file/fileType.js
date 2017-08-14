/**
 * Created by focus on 2017/8/9.
 */

let fs = require("fs");
let EventEmitter = require('events').EventEmitter;
let emitter = new EventEmitter();
let fsPath = require("path");

function TypeFile(path, fileType) {
    this.path = path;
    this.fileType = fileType;
    this.event = emitter;
    this.watch(path, fileType);
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
                self.watch(path, fileType);
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
    
    /**
     * 监听path目录的变化 如果目录发生变化，则进行广播
     * @param path
     * @param fileType
     */
    watch: function (path, fileType) {
        let self = this;
        let changeFileList = [];
        fs.watch(path, function (e, filename) {
            if (filename.split(".").pop() !== fileType) {
                return;
            }
            let tempPath = fs.lstatSync(fsPath.join(path, filename));
            if (tempPath.isDirectory()) {
                changeFileList = self.getFiles(tempPath, fileType);
            }
            if (tempPath.isFile()) {
                self.event.emit("file_change");
            }
        });
    }
};

module.exports = TypeFile;
