import React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Header,
  Form,
  Segment,
  Button,
  Message
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import Heading from './Heading';

class Signin extends React.Component {

  render() {
    return (
      <div>
        <Heading page="signin" />
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Sign-in to your account
            </Header>

            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="mail"
                  iconPosition="left"
                  placeholder="E-mail address"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                />
                <Button color="teal" fluid size="large">
                  Sign Up
                </Button>
              </Segment>
            </Form>

            <Message>
              New to us? <Link to="/signup">Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Signin;