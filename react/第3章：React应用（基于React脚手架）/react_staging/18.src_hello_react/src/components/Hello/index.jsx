import React,{Component} from 'react'
// 样式模块化
import hello from './index.module.css'

export default class App extends Component {
    render() {
        return (
            <h1 className={hello.title}>
                Hello,react!
            </h1>
        )
    }
}