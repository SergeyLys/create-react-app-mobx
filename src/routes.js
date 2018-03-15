import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './views/home';
import User from './views/user';


const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/:user' component={User}/>
    </Switch>
);

export default Routes;