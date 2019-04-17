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
import Footer from './Footer';

class Signup extends React.Component {

  render() {
    return (
      <div>
        <Segment verticle style={{ minHeight: "100vh", margin: "0"}}>
          <Heading page="signup" />
          <Grid textAlign="center" verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" color="teal" textAlign="center">
                Sign-up for an account
              </Header>

              <Form size="large">
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Name"
                  />
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
                Already have an account? <Link to="/signin">Sign In</Link>
              </Message>
            </Grid.Column>
          </Grid>
        </Segment>
        <Footer />
      </div>
    );
  }
}

export default Signup;