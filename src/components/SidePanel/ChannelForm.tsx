import { v4 as uuid } from 'uuid';
import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useContext, useState } from 'react';
import { Button, Form, Icon, Input, Modal } from 'semantic-ui-react';

import { IChannel } from '../../models/channels';
import { RootStoreContext } from '../../stores/rootStore';

const ChannelForm = () => {

    const initialChannel = {
        id: '',
        name: '',
        description: ''
    };

    const {
        isModalvisible,
        showModal,
        createChannel
    } = useContext( RootStoreContext ).channelStore;

    const [channel, setChannel] = useState<IChannel>(initialChannel);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setChannel({ ...channel, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let newChannel = {
            ...channel,
            id: uuid()
        }
        createChannel(newChannel);
        showModal(false);
    }

    return (
        <Modal basic open={ isModalvisible }>
            <Modal.Header>Add Channel</Modal.Header>

            <Modal.Content>
                <Form>
                    <Form.Field>
                        <Input 
                            fluid dasdsa
                            label="Channel Name" 
                            name="name"
                            onChange={ handleInputChange }
                        />
                    </Form.Field>
                    <Form.Field>
                        <Input 
                            fluid 
                            label="Description" 
                            name="description" 
                            onChange={ handleInputChange }
                        />
                    </Form.Field>
                </Form>
            </Modal.Content>

            <Modal.Actions>

                <Button 
                    basic 
                    color='green' 
                    inverted 
                    onClick={ handleSubmit }
                >
                    <Icon name='checkmark'/> Add
                </Button>

                <Button 
                    color='red' 
                    inverted 
                    onClick={ () => showModal(false) }
                >
                    <Icon name='remove' /> Cancel
                </Button>
            </Modal.Actions>  

        </Modal>
    )
}

//convertimos nuestro componente en observable
export default observer( ChannelForm );