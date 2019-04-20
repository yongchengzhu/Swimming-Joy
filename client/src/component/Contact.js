import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';

import Heading from './Heading';
import Footer from './Footer';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <Segment verticle style={{ /*height: "100vh",*/ margin: "0" }}>
          <Heading page="contact" style={{ paddingBottom: "0" }} />
          <div style={{height: "100vh"}}>
            <div className ="container-fluid" style={{ padding: "0 15em" }}>
              <div className="row align-items-center" style={{ height: "100vh", width: "100%" }}>
                <div className="col" style={{ /*borderRadius: "100px",*/ textAlign: "center", padding: "5em 0", backgroundColor: "seashell", position: "absolute", left: "0" }}>
                  <p style={{ fontSize: "3em", fontWeight: "100" }}>Contact Us</p>
                  <p style={{ fontWeight: "100", fontSize: "18px" }}>
                    Elvis Salcedo
                    <br/>
                    5124 Beach Channel Dr Far Rockaway NY, 11691
                    <br/>
                    Elvissalcedo12@aol.com
                    <br/>
                    929-306-9175
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <Container text style={{ marginTop: "4em"}}>
            <Header as="h1">Contact</Header>

            <p>Elvis Salcedo
              <br/>
              5124 Beach Channel Dr Far Rockaway NY, 11691
              <br/>
              Elvissalcedo12@aol.com
              <br/>
              929-306-9175
            </p>
          </Container> */}
        </Segment>
        <Footer />
      </div>
    );
  }
}

export default Contact;