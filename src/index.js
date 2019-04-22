// console.log('noo')
// webpack-dev-server打包好的main.js是托管到了内存中，在项目根目录中看不见

// 引包
import React from 'react'
import ReactDOM from 'react-dom'
// 创建虚拟DOM
// const myh1 = React.createElement('h1',{id:'myh1',title:'h1标签'},'这是一个h1标签');
// 虚拟DOM的嵌套
// const mydiv =React.createElement('div',null,'这是一个div',myh1)


import '@/class'
// HTML是最优秀的标记语言
// 注意：在js文件中默认不能写类似于HTML的标记，否则会打包失败
// 可以使用babel来转换这些js中的标签；
// 在js文件中混入HTML的语法叫做JSX语法，符合XML规范的JS
// JSX语法的本质，在运行的时候被转换成，React.createElement（）


const mydiv =<div id="mydiv"><h1>首页</h1></div>


// ReactDom.render()把虚拟DOM渲染到制定容器
ReactDOM.render(mydiv,document.getElementById('app'))
