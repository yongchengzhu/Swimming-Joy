import React from 'react';
import { Link } from 'react-router-dom';
import {
  Segment,
  Container,
  Grid,
  Header,
  List
} from 'semantic-ui-react';

class Footer extends React.Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: "5em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as={Link} to="/contact">Contact Us</List.Item>
                </List>
              </Grid.Column>
              {/* <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Placeholder</List.Item>
                </List>
              </Grid.Column> */}
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Location
                </Header>
                <p>
                  5124 Beach Channel Dr Far Rockaway NY, 11691 <br />
                  Tel: 929-306-9175
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>      
    );
  }
}

export default Footer;