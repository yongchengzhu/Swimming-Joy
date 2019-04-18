import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, Field } from 'redux-form';
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
import { signin } from '../actions';

class Signin extends React.Component {
  onSubmit = (formProps) => {
    this.props.signin(formProps, () => this.props.history.push('/'));
  }

  render() {
    return (
      <div>
        <Segment style={{ minHeight: "100vh", margin: "0"}}>
        <Heading page="signin" />
          <Grid textAlign="center" verticalAlign="middle">
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as="h2" color="teal" textAlign="center">
                Sign-in to your account
              </Header>

              <Form size="large" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Segment stacked>
                  <Form.Field>
                    <Field
                      name="email"
                      type="email"
                      component="input"
                      autoComplete="off"
                      placeholder="E-mail address"
                      required
                    />
                  </Form.Field>
                  <Form.Field>
                    <Field
                      name="password"
                      type="password"
                      component="input"
                      autoComplete="off"
                      placeholder="Password"
                      required
                    />
                  </Form.Field>
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
        </Segment>
        <Footer />
      </div>
    );
  }
}

export default compose(
  reduxForm({ form: 'signin' }),
  connect(null, { signin })
)(Signin);