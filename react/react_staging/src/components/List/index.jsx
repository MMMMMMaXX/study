import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {

    // 初始化状态，users初始值为数组
    state = {
        users: [], //users初始值为数组
        isFirst: true,//是否为第一次打开页面
        isLoading: false,//标识是否处于加载中
        err: ''//存储请求相关错误信息
    }
    // 更新state
    updateAppState = (stateObj) => {
        this.setState(stateObj);
    }

    componentDidMount() {
        // _占位，不传这个参数
        PubSub.subscribe('mx', (_, stateObj) => {
            // console.log('List组件收到数据了', data);
            this.setState(stateObj);
        })
    }

    componentWillUnmount() {
        // @ts-ignore
        PubSub.unsubscribe(this.token);
    }

    
    render() {
        const { users, isFirst, isLoading, err } = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h3>欢迎使用，输入关键字，随后回车或点击搜索</h3> :

                            isLoading ? <h3>Loading...</h3> :
                                err ? <h1 style={{ color: 'red' }}>{err}</h1> :
                                    users.length === 0 ? <h3>没有找到和关键词相关用户~</h3> :
                                        users.map((userObj) => {
                                            return (
                                                <div key={userObj.id} className="card">
                                                    <a rel="noreferrer" href={userObj.html_url} target="_blank">
                                                        <img alt="head_portrait" src={userObj.avatar_url} style={{ width: '100px' }} />
                                                    </a>
                                                    <p className="card-text">{userObj.login}</p>
                                                </div>
                                            )
                                        })
                }
            </div>
        )
    }
}
