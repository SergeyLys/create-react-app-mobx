import React from 'react';
import {observer} from 'mobx-react';

import menuStore from '../../stores/menu-store';

@observer 
class Menu extends React.Component {
    render() {
        return (
            <header>
                <span 
                    className={menuStore.show ? 'active' : ''}
                    onClick={() => menuStore.toggleLeftPanel()}
                >M</span>
            </header>
        )
    }
}

export default Menu;