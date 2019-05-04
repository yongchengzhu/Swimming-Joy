import React from 'react';
import { Link } from 'react-router-dom';
import {
  Segment,
  Container,
  Grid,
  Header,
  List
} from 'semantic-ui-react';

import './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              {/* <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as={Link} to="/contact">Contact Us</List.Item>
                </List>
              </Grid.Column> */}
              {/* <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Placeholder</List.Item>
                </List>
              </Grid.Column> */}
              <Grid.Column width={/*7*/12}>
                <Header as="h4" inverted style={{ fontSize: "1.4em" }}>
                  Swimming Joy Inc.
                </Header>
                <p style={{ color: "grey", fontSize: "1.3em" }}>
                  5124 Beach Channel Dr Far Rockaway NY, 11691 P: 929-306-9175
                </p>
                
                <List.Item class="service" as={Link} to="/contact" style={{ color: "white", fontWeight: "600" }}>Contact Us </List.Item>
                 - 
                <List.Item class="service" as={Link} to="/about" style={{ color:"white", fontWeight: "600" }}> About Us</List.Item>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>      
    );
  }
}

export default Footer;