import React from 'react';
import { Menu } from 'semantic-ui-react';
import { IChannel } from '../../models/channels';

interface IProps{
    channel: IChannel
}

const ChannelItem: React.FC<IProps> = ({ channel }) => {
    return (
            <Menu.Item
                key={channel.id}
                name={channel.name}
                style={{ opacity: 0.7 }}
                onClick={() => console.log(channel.name)}
            >
                #{channel.name}
            </Menu.Item>
    );
}

export default ChannelItem;
