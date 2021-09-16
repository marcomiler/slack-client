import React from 'react';
import { Menu } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';

import { IChannel } from '../../models/channels';

interface IProps{
    channel: IChannel,
    changeChannel: ( channel: IChannel ) => void
}

const ChannelItem: React.FC<IProps> = ({ channel, changeChannel }) => {
    return (
        <Menu.Item
            key={channel.id}
            name={channel.name}
            style={{ opacity: 0.7 }}
            onClick={ () => changeChannel(channel) }
        >
            # {channel.name}
        </Menu.Item>
    );
}

export default observer( ChannelItem );
