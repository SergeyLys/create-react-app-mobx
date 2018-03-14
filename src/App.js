import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Menu from './components/menu/index';
import LeftPanelController from './components/left-panel-controller/index';
import Routes from './routes';

import {Provider} from 'mobx-react';
import menuStore from './stores/menu-store';

const history = createBrowserHistory();


const stores = {menuStore};

const App = () => (
    <Provider {...stores}>
        <BrowserRouter history={history}>
            <div>
                <Menu/>
                <LeftPanelController/>
                <Routes/>
                
            </div>
        </BrowserRouter>
    </Provider>
)

export default App;
