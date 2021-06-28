import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

    // 标识鼠标移入、移出
    state = { mouse: false };

    // 鼠标移入、移出的回调
    handleMouse = (flag) => {
        return () => {
            // console.log(flag);
            this.setState({ mouse: flag })
        }
    }

    // 勾选或取消勾选一个todo的回调
    handleCheck = (id) => {
        return (event) => {
            // console.log(id,event.target.checked);
            this.props.updateTodo(id, event.target.checked)
        }
    }

    // 删除一个todo的回调
    handleDelete = (id) => {
        // 不使用高阶函数
        if (window.confirm('是否确定删除?')) {
            this.props.deleteTodo(id);
        }
    }

    render() {
        const { id, name, done } = this.props;
        const { mouse } = this.state
        return (
            <li style={{ backgroundColor: mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : "none" }}>删除</button>
            </li>
        )
    }
}
