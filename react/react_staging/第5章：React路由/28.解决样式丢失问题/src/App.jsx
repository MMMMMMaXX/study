import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from './pages/About'//路由组件
import Home from './pages/Home'//路由组件
import Header from './components/Header'//一般组件
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <Header />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">

                            {/* 原生html中靠<a>跳转到不同的页面 */}
                            {/* <a className="list-group-item active" href="./about.html">About</a>
                                <a className="list-group-item" href="./home.html">Home</a> */}

                            {/* 在React中靠路由链接实现切换组件 */}
                            {/* <NavLink activeClassName="peiqi" className="list-group-item" to="/about" >About</NavLink>
                            <NavLink activeClassName="peiqi" className="list-group-item" to="/home" >Home</NavLink> */}
                            {/* <MyNavLink to="/about" title="About" a={1} b={2} c={3}/> */}
                            {/* 标签体内容也是一个特殊的标签属性，放在children中 */}
                            <MyNavLink to="/mx/about" a={1} b={2} c={3}>About</MyNavLink>
                            <MyNavLink to="/mx/home">Home</MyNavLink>

                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">

                                {/* 注册路由 */}
                                <Switch>
                                    <Route path="/mx/about" component={About} />
                                    <Route path="/mx/home" component={Home} />
                                </Switch>

                            </div>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}
