import React from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';
import SearchInput from './SearchInput';

const MessageHeader = () => {
    return (
        <Segment clearing>
            <Header
                fluid="true"
                as="h2"
                floated="left"
                style={{ marginBottom: 0 }}
            >
                <span>
                    Channel
                    <Icon 
                        name={"star outline"} 
                        color="black"   
                    >
                    </Icon>
                </span>

                <Header.Subheader>2 Users</Header.Subheader>

            </Header>

            <SearchInput />

        </Segment>
    );
}

export default MessageHeader;
