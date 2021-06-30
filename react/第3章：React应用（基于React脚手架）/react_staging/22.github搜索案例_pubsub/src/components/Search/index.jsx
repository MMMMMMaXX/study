import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

    // 搜索框防抖+节流
    debounce = (func) => {
        let timer;
        let timeOut;
        return (event) => {
            const { keyCode } = event;
            if (keyCode === 13) {
                // this.throt(func());
                if (!timeOut) {
                    timeOut = setTimeout(function () {
                        func();
                        timeOut = null;
                    }, 1000)
                }
            } else {
                clearTimeout(timer);
                timer = setTimeout(function () {
                    func();
                }, 1000)
            }
        }
    }

    // 搜索按钮节流
    throt(func) {
        let timeOut;
        return function () {
            if (!timeOut) {
                timeOut = setTimeout(function () {
                    func();
                    timeOut = null;
                }, 1000)
            }
        }
    }

    search = () => {
        console.log('Search组件发布消息了');
        // 获取用户的输入
        // 解构赋值连续写法
        const { keyWordElement: { value: keyWord } } = this;//连续解构赋值
        // console.log(keyWord);
        // 发送请求前通知List更新状态
        // this.props.updateAppState({ isFirst: false, isLoading: true })
        PubSub.publish('mx', { isFirst: false, isLoading: true })
        // console.log(isLoading,keyWord);
        if (keyWord === '') {
            console.log('再次改为first');
            PubSub.publish('mx', { isFirst: true })
        } else {
            // 发送网络请求
            axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
                response => {
                    // 请求成功后通知List更新状态
                    // this.props.updateAppState({ isLoading: false, users: response.data.items })
                    PubSub.publish('mx', { isLoading: false, users: response.data.items })
                    console.log('成功了', response.data);
                },
                error => {
                    // 请求失败后通知List更新状态
                    // this.props.updateAppState({ isLoading: false, err: error.message })
                    PubSub.publish('mx', { isLoading: false, err: error.message })
                    console.log('失败了', error.message);
                }
            )
        }


    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input onKeyUp={this.debounce(this.search)} ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索" />
                    &nbsp;
                    <button onClick={this.throt(this.search)}>
                        搜索
                    </button>
                </div>
            </section>
        )
    }
}
