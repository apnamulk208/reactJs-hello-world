import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import { Home, About, Contacts, NotFound, Forms } from '../';

class Container extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/forms' component={Forms}/>
          <Route path='/contacts' component={Contacts}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default Container;