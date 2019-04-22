import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
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
import { signup } from '../actions';
import './Signup.css';

class Signup extends React.Component {
  onSubmit = (formProps) => {
    this.props.signup(formProps, () => this.props.history.push('/'));
  }

  renderError(err) {
    if (err) {
      return <Message negative>{this.props.auth.error}</Message>;
    }
  }

  render() {
    return (
      <div>
        <Segment style={{ minHeight: "100vh", margin: "0", display: "flex", flexDirection: "column" }}>
          <Heading page="signup" />
          <Grid className="main" textAlign="center" verticalAlign="middle" style={{ flexGrow: "1" }}>
            <Grid.Row>
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header id="title" as="h2" textAlign="center">
                User Registration
              </Header>

              <p id="desc" style={{ marginBottom: "2em" }}>Sign up for free account to use Joy Swimming's online services.</p>

              

              <Form size="large" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Segment stacked>
                  <Form.Field>
                    <Field
                      name="name"
                      type="text"
                      component="input"
                      autoComplete="off"
                      placeholder="Name"
                      required
                    />
                  </Form.Field>
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
                  {this.renderError(this.props.auth.error)}
                  <Button primary fluid size="large">
                    Sign Up
                  </Button>
                </Segment>
              </Form>

              <Message style={{ fontWeight: "100" }}>
                Already have an account? <Link to="/signin">Sign In</Link>
              </Message>
            </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps (state) {
  return { auth: state.auth }
}

export default compose(
  connect(mapStateToProps, { signup }),
  reduxForm({ form: 'signup' })
)(Signup);