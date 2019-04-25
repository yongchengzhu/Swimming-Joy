import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';

import Heading from './Heading';
import Footer from './Footer';

class Contact extends React.Component {
  render() {
    return (
      <div style={{ background: "url('https://static.wixstatic.com/media/a9ff3b_38e5f9b5a82546a689f8013ed6fce03b.png/v1/fill/w_408,h_408,al_c,q_85/a9ff3b_38e5f9b5a82546a689f8013ed6fce03b.webp')", backgroundColor: "rgb(43, 158, 217)" }}>
        <Segment vertical style={{ border:"none", margin: "0", paddingBottom: "0", backgroundColor: "rgb(26, 76, 102)" }}>
          <Heading page="contact" style={{ paddingBottom: "0" }} />
        </Segment>
          <div style={{height: "100vh"/*, background: "url('https://cdn.discordapp.com/attachments/331651297453539329/570655862851633195/Capture.PNG') no-repeat center center"*/}}>
            <div className ="container-fluid" style={{ padding: "0 15em" }}>
              <div className="row align-items-center" style={{ height: "100vh", width: "100%" }}>
                <div className="col" style={{ /*borderRadius: "100px",*/ textAlign: "center", padding: "5em 0", backgroundColor: "seashell", position: "absolute", left: "0", opacity: "0.8" }}>
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
        
        <Footer />
      </div>
    );
  }
}

export default Contact;