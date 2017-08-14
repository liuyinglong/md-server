/**
 * Created by focus on 2017/8/10.
 */
let yargs = require('yargs');

yargs.option("s", {     //静态文件目录
    alias: "static",
    type: "string"
});

yargs.option("p", {     //静态文件目录
    alias: "port",
    type: "number"
});

yargs.option("P", {      //md文件目录
    alias:"path",
    type: "string"
});


let argv = yargs.argv;



module.exports = argv;