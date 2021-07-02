// 引入React核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 引入路由器
// 路由器包裹整个App，使App内的路由可以通信
import { BrowserRouter } from 'react-router-dom'
// import { HashRouter } from 'react-router-dom'
// 引入App组件
import App from './App'

// 渲染App到页面
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'))

// 入口文件