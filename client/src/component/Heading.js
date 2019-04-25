import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "semantic-ui-css/semantic.min.css";
import {
  Container,
  Menu
} from "semantic-ui-react";

import { fetchUser } from '../actions';

import './Heading.css'

class Heading extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderLinks() {
    if (this.props.auth.authenticated) {
      return (
        <React.Fragment>
          <Menu.Item style={{ color: "white" }}>
            {this.props.auth.name}
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/signout"
            style={{ color: "white" }}
          >
            Sign Out
          </Menu.Item>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Menu.Item
            as={Link}
            to="/signup"
            active={this.props.page === "signup"}
            style={{ marginLeft: "0.5em", color: "white" }}
          >
            Sign Up
          </Menu.Item>
          <Menu.Item
            as={Link} 
            to="/signin"
            active={this.props.page === "signin"}
            style={{ color: "white" }}
          >
            Sign In
          </Menu.Item>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <Menu secondary pointing size="large" stackable>
        <Container>
          <Menu.Item as={Link} to="/" style={{ color: "white" }}>Home</Menu.Item>
          <Menu.Item as={Link} to="/programs" active={this.props.page === "program"} style={{ color: "white" }}>Programs</Menu.Item>
          <Menu.Item as={Link} to="/about" active={this.props.page === "about"} style={{ color: "white" }}>About</Menu.Item>
          <Menu.Item as={Link} to="/contact" active={this.props.page === "contact"} style={{ color: "white" }}>Contact</Menu.Item>

          <Menu.Menu position="right">
            {this.renderLinks()}
            {/* <Menu.Item as={Link} to="/signup" active={this.props.page === "signup"}>Sign Up</Menu.Item>
            <Menu.Item as={Link} to="/signin" active={this.props.page === "signin"}>Sign In</Menu.Item> */}
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { fetchUser })(Heading);