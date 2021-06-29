import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    search = () => {
        // 获取用户的输入
        // 解构赋值连续写法
        const { keyWordElement: { value: keyWord } } = this;//连续解构赋值
        // console.log(keyWord);
        // 发送请求前通知App更新状态
        this.props.updateAppState({ isFirst: false, isLoading: true })
        // 发送网络请求
        axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
            response => {
                // 请求成功后通知App更新状态
                this.props.updateAppState({ isLoading: false, users: response.data.items })
                console.log('成功了', response.data);
            },
            error => {
                // 请求失败后通知App更新状态
                this.props.updateAppState({ isLoading: false, err: error.message })
                console.log('失败了', error);
            }
        )
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
