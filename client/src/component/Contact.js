import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';

import Heading from './Heading';
import Footer from './Footer';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Heading page="contact" />
        <Container text style={{ marginTop: "4em", height: "100vh" }}>
          <Header as="h1">Contact</Header>

          <p>Elvis Salcedo
            <br/>
            5124 Beach Channel Dr Far Rockaway NY, 11691
            <br/>
            Elvissalcedo12@aol.com
            <br/>
            929-306-9175
          </p>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Contact;