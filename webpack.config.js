// webpack的配置文件
// webpack默认只能打包.js后缀名类型的文件，像.png .vue无法主动配置，所以需要配置第三方的loder
// html-webpack-plugin可将html文件打包在内存中
const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
const htmlWebpackplugin =new HtmlWebpackplugin({
    template:path.join(__dirname,'src/index.html'),
    filename:'index.html'
})
module.exports = {
    mode:"development",
    plugins:[
        htmlWebpackplugin
    ],
    module:{
        // 所有第三方模块的配置文件
        rules:[
            {test:/\.js|jsx$/,use:'babel-loader',exclude:/node_modules/}  //一定要添加排除项exclude，否则项目起不来
        ]
    },
    resolve:{
        extensions:['.js','.jsx','.json'], //表示这几个文件的后缀名可以不写
        alias:{ //表示别名
            '@':path.join(__dirname,'./src') //@表示项目目录中src的这一层目录
        }

    }
}
