import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import DevTools from "mobx-react-devtools";

ReactDOM.render(
    <div>
        <App />
        {/*<DevTools />*/}
    </div>,
    document.getElementById('root')
);
registerServiceWorker();
