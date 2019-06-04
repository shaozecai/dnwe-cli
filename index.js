#!node

var fs = require('fs');
var path = require('path');

var config = {};
process.argv.slice(2).forEach((item)=>{
    switch (item){
        case "-init":
            config.init = true;
            break;
        case '-v':
            config.v = true;
            break;
        case "-h":
            config.h = true;
            break;
    }
});
if(config.init){

}else if(config.v){
    console.log('当前使用dnwe-cli版本为：'+require('./package').version)
}else if(config.h){
    console.log('dnwe -init: 构建PC端初始化工程');
    console.log('dnwe -v: 查看dnwe-cli当前使用版本');
    console.log('dnwe -h: 查看帮助');
}