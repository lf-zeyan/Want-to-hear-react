import React, { Component } from 'react';
import axios from 'axios'
import '../../mock/mock_tab.js'
import Nav_tab from './nav_tab.js'

import { Route, Redirect, NavLink } from 'react-router-dom'


export class Fenlei extends Component {
    constructor() {
        super()
        this.state = {
            list: []
        }
    }
    componentDidMount() {
        axios.get('/fenlei').then(res => {
            this.setState({
                list: res.data
            })
        })
    }
    render() {
        let data = this.state.list
        return (
            <div>
                <div className='nav_tab'>
                    {
                        data.map((item, index) => {
                            return (
                                <NavLink key={index} to={item.c_1_path}>{item.c_1_title}</NavLink>
                            )
                        })
                    }
                </div>
                {
                    data.map((item, index) => {
                        return (
                            <div key={index}>
                                <Route path={item.c_1_path} component={() => { return <Nav_tab list={item}></Nav_tab> }}></Route>
                                <Redirect to='/home/fenlei/quanbu'></Redirect>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Fenlei;
