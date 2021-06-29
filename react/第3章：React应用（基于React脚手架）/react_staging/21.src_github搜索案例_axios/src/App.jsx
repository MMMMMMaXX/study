import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'
import './App.css'

export default class App extends Component {

    // 初始化状态，users初始值为数组
    state = {
        users: [], //users初始值为数组
        isFirst: true,//是否为第一次打开页面
        isLoading: false,//标识是否处于加载中
        err: ''//存储请求相关错误信息
    }

    // 更新App的state
    updateAppState = (stateObj) => {
        this.setState(stateObj);
    }

    render() {
        return (
            <div>
                <div className="container">
                    <Search updateAppState={this.updateAppState} />
                    <List {...this.state} />
                </div>
            </div>
        )
    }
}
