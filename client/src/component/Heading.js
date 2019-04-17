import React from 'react';
import { Link } from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";
import {
  Segment,
  Container,
  Menu
} from "semantic-ui-react";

class Heading extends React.Component {
  render() {
    return (
      <Menu secondary pointing size="large">
        <Container>
          <Menu.Item as={Link} to="/">Home</Menu.Item>
          <Menu.Item as={Link}>Programs</Menu.Item>
          <Menu.Item as={Link} to="/about" active={this.props.page === "about"}>About</Menu.Item>
          <Menu.Item as={Link}>Contact</Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item as={Link}>Sign Up</Menu.Item>
            <Menu.Item as={Link}>Sign In</Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default Heading;