import React, { Component } from 'react';

export class Xiangqing extends Component {

    shouCang=(data)=>{
       localStorage.setItem('Data',JSON.stringify(data))
    }
    render() {
        let data = this.props.location.state
        return (
            <div>
                <ul className='ul'>
                    <div className='left'>
                        <img src={data.pic} alt="" />
                    </div>
                    <div className='right'>
                        <p>{data.name}</p>
                        <p>{data.title}</p>
                    </div>
                </ul>
                <div className='btn'>
                    <div>播放专辑</div>
                    <div onClick={()=>{this.shouCang(data)}}>收藏</div>
                    <div>分享</div>
                </div>
            </div>
        );
    }
}

export default Xiangqing;
