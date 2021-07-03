import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        // console.log(this.props);
        // const { title } = this.props
        return (
            // @ts-ignore
            <NavLink {...this.props} activeClassName="peiqi" className="list-group-item" />
        )
    }
}
