import React, { Component } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../components/all/home.js'
import Xiangqing from '../components/all/xiangqing.js'
import Shoucang from '../components/all/shoucang.js'
export class router extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/xiangqing' component={Xiangqing}></Route>
                    <Route path='/shoucang' component={Shoucang}></Route>
                    <Redirect to='/home'></Redirect>
                </Switch>
            </div>
        );
    }
}

export default router;
