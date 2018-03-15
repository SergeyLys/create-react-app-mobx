import React, { Component } from 'react';
import {Router} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';

import Menu from './components/menu/index';
import LeftPanelController from './components/left-panel-controller/index';
import Routes from './routes';

import {Provider} from 'mobx-react';
// import {useStrict} from 'mobx';
import Stores from './stores';

const history = createBrowserHistory();

// useStrict(true);


const App = () => (
    <Provider
        menuStore={Stores.menuStore}
        userStore={Stores.userStore}
    >
        <Router history={history}>
            <div>

                <Routes/>

            </div>
        </Router>
    </Provider>
);

export default App;
