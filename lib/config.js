/**
 * Created by focus on 2017/8/10.
 */
let yargs = require('yargs');

yargs.option("s", {
    alias: "static",
    boolean: true,
    type: "boolean"
});

yargs.option("P",{
    alias:"path",
    type:"string"
});

let argv = yargs.argv;



let config = {
    static: argv.static,
    path:argv.path
};



module.exports=config;