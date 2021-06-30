import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
    render() {
        const { users, isFirst, isLoading, err } = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h3>欢迎使用，输入关键字，随后点击搜索</h3> :
                    isLoading ? <h3>Loading...</h3> :
                    err ? <h1 style={{color:'red'}}>{err}</h1> :
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
