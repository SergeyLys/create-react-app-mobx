import React from 'react';
import {observer, inject} from 'mobx-react';

@inject('menuStore')
@observer 
class Menu extends React.Component {
    render() {
        const { menuStore } = this.props;
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