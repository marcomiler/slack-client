import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { 
    Form, 
    Grid,
    Icon, 
    Label,
    Header,
    Button, 
    Message, 
    Segment
} 
from 'semantic-ui-react';
import { FORM_ERROR } from 'final-form';
import { combineValidators, isRequired } from 'revalidate'
import { Form as FinalForm, Field } from 'react-final-form';

import TextInput from '../Common/Form/TextInput';
import { IUserFormValues } from '../../models/users';
import { RootStoreContext } from '../../stores/rootStore';

const Login = () => {

    const validate = combineValidators({
        email: isRequired('email'),
        password: isRequired('password')
    });
    const { login } = useContext( RootStoreContext ).userStore;
    const handleSubmitForm = async ( values: IUserFormValues ) => {
        // console.log(values);
        //con el catch seteamos el error en la propiedad de final form
        return login( values ).catch((err) => ( { [FORM_ERROR]: err } ));
    }

    return (
       <Grid textAlign="center" verticalAlign="middle" className="app">
           <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h1" icon color="violet" textAlign="center">
                    <Icon name="code branch" color="violet" />
                    Login to Slack
                </Header>
                <FinalForm 
                    onSubmit={ handleSubmitForm }
                    validate={ validate }
                    render={ ({ handleSubmit, submitting, submitError, errors }) => (
                        <Form onSubmit={ handleSubmit } size="large">
                            <Segment stacked>
                                <Field 
                                    name="email"
                                    type="text"
                                    icon="mail icon"
                                    placeholder="Email Address"
                                    component={ TextInput }
                                />
                                <Field
                                    name="password"
                                    type="password"
                                    icon="lock icon"
                                    placeholder="Password"
                                    component={ TextInput }
                                />
                                <Button 
                                    fluid 
                                    color="violet" 
                                    size="large"
                                    disabled={ submitting }
                                >
                                    Login
                                </Button>
                                { submitError && ( <Label color="red" basic content={submitError.statusText} /> ) }
                            </Segment>
                        </Form> 
                    )}>
                </FinalForm>
                <Message>
                    Don´t have an account ? <Link to="/register" >Go to Register</Link>
                </Message>
           </Grid.Column>
       </Grid>
    );
}

export default Login;
