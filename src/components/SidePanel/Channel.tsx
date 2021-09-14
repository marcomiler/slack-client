import React, { useContext, useEffect } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';

import ChannelItem from './ChannelItem';
import ChannelForm from './ChannelForm';
import { IChannel } from '../../models/channels';
import { RootStoreContext } from '../../stores/rootStore';

const Channel = () => {

    const { 
        channels,
        loadChannels,
        showModal 
    } = useContext( RootStoreContext ).channelStore;
    
    useEffect(() => {
        loadChannels();
    }, [loadChannels]);

    const displayChannels = ( channels: IChannel[] ) => {
        return (
            channels.length > 0 &&
            channels.map((channel) => (
                <ChannelItem key={channel.id} channel={channel}/>
            ))
        );
    };

    return (
        <>
            <Menu.Menu style={{ paddingBottom: '2em' }} >
                <Menu.Item>
                    <span> <Icon name="exchange" /> CHANNELS </span>

                        ({ channels.length }) 
                        <Icon  
                            name="add" 
                            onClick={ () => showModal(true) } 
                            className="addIcon"
                        />
                </Menu.Item>
                { displayChannels( channels ) }
            </Menu.Menu>

            <ChannelForm />

        </>
    );
    
}

//debemos convertir nuestro componente en observador
export default observer( Channel );