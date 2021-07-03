import React, { Component } from 'react'
import qs from 'querystring'

const detailData = [
    { id: '01', content: 'Hello MX' },
    { id: '02', content: 'Hello Vue' },
    { id: '03', content: 'Hello React' }
]

export default class Detail extends Component {
    render() {
        console.log(this.props);

        // 接收params参数
        // const { id, title } = this.props.match.params;

        // 接收search参数
        const { search } = this.props.location
        const { id, title } = qs.parse(search.slice(1))

        const findResult = detailData.find((datailObj) => {
            return datailObj.id === id;
        })
        return (
            <div>
                <ul>
                    <li>ID:{id}</li>
                    <li>TITLE:{title}</li>
                    <li>CONTENT:{findResult.content}</li>
                </ul>
            </div>
        )
    }
}
