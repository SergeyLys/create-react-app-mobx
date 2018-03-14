import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './views/home';
import About from './views/about';


const Routes = () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
    </Switch>
)

export default Routes;