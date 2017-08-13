/**
 * Created by focus on 2017/8/10.
 */
let yargs = require('yargs');

yargs.option("s", {     //静态文件目录
    alias: "static",
    boolean: true,
    type: "boolean"
});

yargs.option("P", {      //md文件目录
    alias: "path",
    type: "string"
});

let argv = yargs.argv;


let config = {
    static: argv.static,
    path: argv.path
};


module.exports = config;