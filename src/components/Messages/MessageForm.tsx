import React, { useContext } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import {Form as FinalForm, Field } from 'react-final-form';

import TextInput from '../Common/Form/TextInput';
import { RootStoreContext } from '../../stores/rootStore';
import { IMessageFormValues } from '../../models/messages';
import { FORM_ERROR } from 'final-form';

const MessageForm = () => {

    const { sendMessage } = useContext(RootStoreContext).messageStore;

    const handleSubmitForm = async ( values: IMessageFormValues )  => {
        await sendMessage(values).catch((err) => ( {[FORM_ERROR]: err} ));
    }

    return (
        <FinalForm
            onSubmit={ handleSubmitForm }
            render={ ({ handleSubmit }) => (    
                <Form onSubmit={ handleSubmit } >
                    <Segment>
                        <Field
                            fluid
                            name="content"
                            style={{ marginBottom: '0.7em' }}
                            label={<Button icon={'add'} />}
                            labelPosition="left"
                            placeholder="Write your messages"
                            iconLabel
                            component={ TextInput }
                        />

                        <Button.Group icon widths="2">
                            <Button
                                color="orange"
                                content="Add Reply"
                                labelPosition="left"
                                icon="edit"
                            />

                            <Button
                                color="teal"
                                content="upload Media"
                                labelPosition="right"
                                icon="cloud upload"
                            />

                        </Button.Group>
                    </Segment>
                </Form>
            )}> 
        </FinalForm>
    );
}

export default MessageForm;
