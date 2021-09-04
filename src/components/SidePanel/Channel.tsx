import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, Icon, Input, Menu, Modal } from 'semantic-ui-react';
import { IChannel } from '../../models/channels';
import ChannelItem from './ChannelItem';

interface IState{
    channels: IChannel[],
    modal: boolean
}

class Channel extends Component<{}, IState> {

    state= { channels: [], modal: false }

    openModal = () => this.setState({ modal: true });
    closeModal = () => this.setState({ modal: false });

    displayChannels = ( channels: IChannel[] ) => {
        return (
            channels.length > 0 &&
            channels.map((channel) => (
                <ChannelItem key={channel.id} channel={channel}/>
            ))
        );
    };

    componentDidMount(){
        axios.get<IChannel[]>('http://localhost:5000/api/channels').then((response) => {
            this.setState({
                channels: response.data
            });
        })
    }

    render(){

        const { channels, modal } = this.state;
        console.log(channels);
        return (
            <>
                <Menu.Menu style={{ paddingBottom: '2em' }} >
                    <Menu.Item>
                        <span>
                            <Icon name="exchange" />
                            CHANNELS
                        </span>
                         ({ channels.length }) <Icon name="add" onClick={this.openModal} className="addIcon"/>
                    </Menu.Item>
                    {this.displayChannels(channels)}
                </Menu.Menu>
                
                <Modal basic open={modal}>
                    <Modal.Header>Add Channel</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <Input fluid label="Channel Name" name="channelName" />
                            </Form.Field>
                            <Form.Field>
                                <Input fluid label="Description" name="channelDescription" />
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='green' inverted onClick={this.openModal}>
                        <Icon name='checkmark' /> Add
                        </Button>
                        <Button color='red' inverted onClick={this.closeModal}>
                        <Icon name='remove' /> Cancel
                        </Button>
                    </Modal.Actions>                    
                </Modal>
            </>
        );
    }
}

export default Channel;