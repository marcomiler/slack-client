import React from 'react';
import { Comment, Segment } from 'semantic-ui-react';
import MessageForm from './MessageForm';
import MessageHeader from './MessageHeader';

const Messages = () => {
    return (
        <>
           <MessageHeader />

            <Segment>
                <Comment.Group>

                </Comment.Group>
            </Segment>

            <MessageForm />
            
        </>
    )
}

export default Messages;
