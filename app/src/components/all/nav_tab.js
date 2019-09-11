import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

export class Nav_tab extends Component {

    clickUl(item) {
        this.props.history.push('/xiangqing', item)
        // console.log(item);
    }
    render() {
        let data = this.props.list.c_1_content
        return (
            <div>
                {
                    data.map((item, index) => {
                        return (
                            item.c_2_content.map((items, indexs) => {
                                return (
                                    items.c_3_content.map((itemss, indexss) => {
                                        return (
                                            <ul className='ul' key={indexss} onClick={() => { this.clickUl(itemss) }}>
                                                <div className='left'>
                                                    <img src={itemss.pic} alt="" />
                                                </div>
                                                <div className='right'>{itemss.name}</div>
                                            </ul>
                                        )
                                    })
                                )
                            }))
                    })
                }
            </div>
        );
    }
}

export default withRouter(Nav_tab);
