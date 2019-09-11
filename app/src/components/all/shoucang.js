import React, { Component } from 'react';

export class Shoucang extends Component {
    render() {
        let list = JSON.parse(localStorage.getItem('Data'))
        return (
            <div>
                {
                    <div>
                        <p className='wodeShoucang'>我的收藏</p>
                        <ul className='ul'>
                            <div className='left'>
                                <img src={list.pic} alt="" />
                            </div>
                            <div className='right'>
                                <p>{list.name}</p>
                                <p>{list.title}</p>
                            </div>
                        </ul>
                    </div>
                }
            </div>
        );
    }
}

export default Shoucang;
