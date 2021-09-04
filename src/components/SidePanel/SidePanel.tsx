import React from 'react';
import { Menu } from 'semantic-ui-react';
import Channel from './Channel';

import UserPanel from './UserPanel';

const SidePanel = () => {
    return (
       <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{ background: '#4c3c4c', fontSize: '1.2rem' }}
       >
           <UserPanel />
           <Channel />
       </Menu>
    );
}

export default SidePanel;
