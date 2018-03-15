import React from 'react';
import {Link} from 'react-router-dom';
import menuStore from '../../stores/menu-store';
import {observer, inject} from 'mobx-react';

const LeftPanelController = observer(() => (
    <div style={{display: menuStore.isOpenLeftPanel ? "block" : "none"}}>
        <span onClick={() => menuStore.closeLeftPanel()}>X</span>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
        </ul>
    </div>
    
))

export default LeftPanelController;