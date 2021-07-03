import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink'
/* import News from './News'
import Message from './Message' */

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to="/news">News</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to="/message">Message</MyNavLink>
                    </li>
                </ul>
                {/* 注册路由 */}

                
            </div>
        )
    }
}
