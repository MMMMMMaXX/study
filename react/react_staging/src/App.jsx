import React, { Component } from 'react';
import { Button, DatePicker, Space } from 'antd';
import { WechatOutlined, SearchOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';
import './App.less';

export default class App extends Component {
    onChange(date, dateString) {
        console.log(date, dateString);
    }
    render() {
        const { RangePicker } = DatePicker;
        return (
            <div>
                App...
                <button>点击</button>
                <Button type="primary">按钮1</Button>
                <Button>按钮2</Button>
                <Button type="link">按钮3</Button>
                <WechatOutlined />
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
                <Space direction="vertical">
                    <DatePicker onChange={this.onChange} />
                    <RangePicker showTime />
                </Space>
            </div >
        )
    }
}
