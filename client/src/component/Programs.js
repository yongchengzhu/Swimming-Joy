import React from 'react';
import { 
  Segment,
  Container,
  Header
} from 'semantic-ui-react';

import Heading from './Heading';
import Footer from './Footer';

class Programs extends React.Component {
  render() {
    return (
      <div>
        <Segment verticle style={{ minHeight: "100vh", margin: "0"}}>
          <Heading page="program" />
          <Container text style={{ marginTop: "4em"}}>
          <Header as="h1">Programs</Header>
          </Container>
        </Segment>
        <Footer />
      </div>
    );
  }
}

export default Programs;