import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    search = () => {
        // 获取用户的输入
        const {keyWordElement:{value}} = this;//连续解构赋值
        console.log(value);
        // 发送网络请求
        axios.get(``)
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索" />
                    &nbsp;
                    <button onClick={this.search}>
                        搜索
                    </button>
                </div>
            </section>
        )
    }
}
