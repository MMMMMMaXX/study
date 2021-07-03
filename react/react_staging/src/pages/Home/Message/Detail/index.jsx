import React, { Component } from 'react'

const detailData = [
    {id:'01',content:'Hello MX'},
    {id:'02',content:'Hello Vue'},
    {id:'03',content:'Hello React'}
]

export default class Detail extends Component {
    render() {
        console.log(this.props);
        const {id,title} = this.props.match.params;
        const findResult = detailData.find((datailObj)=>{
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
