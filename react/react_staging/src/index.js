// 引入React核心库
import React from 'react'
// 引入ReactDOM
import ReactDOM from 'react-dom'
// 
import { BrowserRouter } from 'react-router-dom'
// 引入App组件
import App from './App'

// 渲染App到页面
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'))

// 入口文件