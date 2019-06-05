#! node
//使用node执行文件

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
    function write(path,str,mode){
        fs.writeFileSync(path,str)
    }
    function mkdir(path,fn){
        fs.mkdir(path,function(err){
            fn && fn()
        })
    }

    //循环拷贝文件
    function traver(dir,callback,loopPath){
        fs.readdirSync(dir).forEach(function(file){
            //文件夹
            if(fs.statSync(pathname).isDirectory()){
                if(file == 'coverage_temp'){
                    //直接写成coverage，全局安装时无法拷贝到npm下
                    mkdir(loopPath + '/coverage',function(){
                        traver(pathname,callback,loopPath + '/coverage');
                    });
                }else{
                    mkdir(loopPath + '/' + file,function(){
                        traver(pathname,callback,loopPath+'/'+file);
                    })
                }

            //文件
            }else{
                if(file == ".gitignore_temp"){
                    //直接写成.gitignore，全局安装时无法拷贝到npm下
                    file = ".gitignore"
                }
                callback(pathname,file,loopPath);
            }
            
        })
    }

    var dir = path.join(__dirname,"template","");//需要拷贝的文件夹
    traver(dir,function(pathname,file,loopPath){
        if(file == "font.ttf" || file == "aaa.ttf"){
            write(loopPath+'/'+file,fs.readFileSync(pathname))
        }else{
            write(loopPath+'/'+file,fs.readFileSync(pathname,'utf-8'))
        }
    },'.');


    console.log('build complete');
}else if(config.v){
    console.log('当前使用dnwe-cli版本为：'+require('./package').version)
}else if(config.h){
    console.log('dnwe -init: 构建PC端初始化工程');
    console.log('dnwe -v: 查看dnwe-cli当前使用版本');
    console.log('dnwe -h: 查看帮助');
}