import React, { Component } from 'react';

export class My extends Component {
    shouCang=()=>{
        this.props.history.push('/shoucang')
    }
    render() {
        return (
            <div className='my'>
                <li>
                    <span>我的已购</span><span>></span>
                </li>
                <li onClick={()=>{this.shouCang()}}>
                    <span>我的收藏</span><span>></span>
                </li>
                <li>
                    <span>我的下载</span><span>></span>
                </li>
                <li>
                    <span>最近收听</span><span>></span>
                </li>
            </div>
        );
    }
}

export default My;
