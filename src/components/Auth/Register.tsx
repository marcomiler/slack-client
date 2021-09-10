import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react';

const Register = () => {
    return (
       <Grid textAlign="center" verticalAlign="middle" className="app">
           <Grid.Column style={{ maxWidth: 450 }}>
                <Header as="h1" icon color="orange" textAlign="center">
                    <Icon name="puzzle piece" color="orange"/>
                    Register for Slack
                </Header>
                <Form size="large">
                    <Segment stacked>
                        <Form.Input 
                            fluid
                            name="username"
                            icon="user"
                            iconPosition="left"
                            placeholder="Username"
                            type="text"
                        />
                        <Form.Input 
                            fluid
                            name="email"
                            icon="mail"
                            iconPosition="left"
                            placeholder="Email Address"
                            type="email"
                        />
                        <Form.Input 
                            fluid
                            name="password"
                            icon="lock"
                            iconPosition="left"
                            placeholder="Password"
                            type="password"
                        />
                        <Form.Input 
                            fluid
                            name="passwordConfirmation"
                            icon="repeat"
                            iconPosition="left"
                            placeholder="Password Confirmation"
                            type="password"
                        />
                        <Button 
                            fluid 
                            color="orange" 
                            size="large"
                        >
                            Submit
                        </Button>
                    </Segment>
                </Form>
                <Message>
                    Already  user ? <Link to="/login">Go to Login</Link>
                </Message>
           </Grid.Column>
       </Grid>
    );
}

export default Register;