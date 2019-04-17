import React from 'react';
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
      <Segment inverted vertical style={{ padding: "5em 0em", position:"absolute", width:"100%", bottom: "0" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Contact Us</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Placeholder</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  Title
                </Header>
                <p>
                  Space for placeholder.
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