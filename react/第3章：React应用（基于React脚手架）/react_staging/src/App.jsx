import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    getStudentData = () => {
        axios.get('http://localhost:3000/students').then(
            // 成功的回调
            response => { console.log('成功了', response.data); },
            // 失败的回调
            error => { console.log('失败了', error); }
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
            </div>
        )
    }
}
