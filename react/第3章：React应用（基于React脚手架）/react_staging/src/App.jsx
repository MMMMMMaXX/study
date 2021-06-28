import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <section className="jumbotron">
                        <h3 className="jumbotron-heading">Search Github Users</h3>
                        <div>
                            <input type="text" placeholder="enter the name you search" />&nbsp;<button>Search</button>
                        </div>
                    </section>
                    <div className="row">
                        <div className="card">
                            <a href="https://github.com/reactjs" target="_blank">
                                <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}} />
                            </a>
                            <p className="card-text">reactjs</p>
                        </div>
                        <div className="card">
                            <a href="https://github.com/reactjs" target="_blank">
                                <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}} />
                            </a>
                            <p className="card-text">reactjs</p>
                        </div>
                        <div className="card">
                            <a href="https://github.com/reactjs" target="_blank">
                                <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}} />
                            </a>
                            <p className="card-text">reactjs</p>
                        </div>
                        <div className="card">
                            <a href="https://github.com/reactjs" target="_blank">
                                <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}} />
                            </a>
                            <p className="card-text">reactjs</p>
                        </div>
                        <div className="card">
                            <a href="https://github.com/reactjs" target="_blank">
                                <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}} />
                            </a>
                            <p className="card-text">reactjs</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
