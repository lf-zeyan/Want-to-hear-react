import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom'
import My from './my.js'
import Remen from './remen.js'
import Fenlei from './fenlei.js'
import Jingpin from './jingpin.js'
export class home extends Component {
  render() {
    return (
      <div>
        <header className='header'>
          <div>想听</div>
          <div><input type="text" placeholder='抖音' /></div>
        </header>
        <div className="nav">
          <NavLink to='/home/my'>我的</NavLink>
          <NavLink to='/home/remen'>热门</NavLink>
          <NavLink to='/home/fenlei'>分类</NavLink>
          <NavLink to='/home/jingpin'>精品</NavLink>
        </div>
        <Switch>
          <Route path='/home/my' component={My}></Route>
          <Route path='/home/remen' component={Remen}></Route>
          <Route path='/home/fenlei' component={Fenlei}></Route>
          <Route path='/home/jingpin' component={Jingpin}></Route>
          <Redirect to='/home/my'></Redirect>
        </Switch>
      </div>
    );
  }
}

export default home;
