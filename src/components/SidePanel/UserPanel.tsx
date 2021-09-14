import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Grid, Header, Icon, Message } from 'semantic-ui-react';

import { RootStoreContext } from '../../stores/rootStore';

const UserPanel = () => {

    const { user, logout, IsLoggedIn } = useContext( RootStoreContext ).userStore;
    
    const dropdownOptions = () => [
        {
            key: 'user',
            text: ( <span> Logged as: <strong>{ user?.email }</strong></span> ),
            disabled: true
        },
        {
            key: 'avatar',
            text: ( <span>change avatar</span> ),
            disabled: true
        },
        {
            key: 'signout',
            text: ( <span className="addIcon" onClick={ logout }>Sign out</span> ),
            disabled: true
        }

    ];

    return (
        <Grid style={{ background: '#4c3c4c', margin: 0 }}>
            <Grid.Column>
                <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
                    <Header inverted floated="left" as="h2">
                        <Icon name="code" />
                        <Header.Content>NetChat</Header.Content>
                    </Header>
                </Grid.Row>
                <Header style={{ padding: '0.25em' }} as="h4" inverted>
                    { IsLoggedIn && user 
                        ?(
                            <Dropdown 
                                trigger={<span>{user?.userName}</span>}
                                options={ dropdownOptions() }
                            />
                        ) 
                        :(
                            <Message>
                                Don´t han an account? <Link to="/register">Register</Link>
                            </Message>
                        )
                    }
                </Header>
            </Grid.Column>
        </Grid>
    );
}

export default UserPanel;
