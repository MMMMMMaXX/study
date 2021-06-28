// 创建“外壳”组件App
// 引入默认暴露的React、分别暴露的Component
import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

// 创建并暴露App组件
export default class App extends Component {

    // 状态在哪里，操作状态的方法就在哪里

    state = {
        todos: [
            { id: '1', name: '吃饭', done: true },
            { id: '2', name: '睡觉', done: true },
            { id: '3', name: '打代码', done: false }
        ],

    }

    // addTodo用于添加一个todo，接受的参数是todo对象
    addTodo = (todoObj) => {
        console.log('App', todoObj);
        // 获取原todos
        let { todos } = this.state;
        // 追加一个todo
        const newTodos = [todoObj, ...todos];
        // 更新状态
        this.setState({ todos: newTodos });
    }

    // 用于更新一个todo对象
    updateTodo = (id, done) => {
        // 获取状态中的todos
        const { todos } = this.state;
        // 匹配数据
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) {
                return { ...todoObj, done };
            } else {
                return todoObj;
            }
        })
        this.setState({ todos: newTodos })
    }

    render() {
        const { todos } = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={todos} updateTodo={this.updateTodo}/>
                    <Footer />
                </div>
            </div>
        )
    }
}

// 暴露App组件
// export default App