import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';

import Heading from './Heading';
import Footer from './Footer';

class Contact extends React.Component {
  render() {
    return (
      <div style={{  }}>
        <Segment vertical style={{ border:"none", margin: "0", paddingBottom: "0", backgroundColor: "rgb(26, 76, 102)" }}>
          <Heading page="contact" style={{ paddingBottom: "0" }} />
        </Segment>

         {/* Page Title */}
         <div className="container-fluid" style={{ margin: "1em 0" }}>
          <div className="row justify-content-center">
            <div className="col-auto">
              <p style={{ fontFamily: "MuseoW01-700", fontSize: "57px", color: "#1A4C66" }}>Joy <span style={{ color: "#2B9ED9" }}>Swimming</span></p>
            </div>
          </div>
        </div>

        {/* Wavy Seperator */}
        <div style={{ width: "100%", height: "18px", backgroundSize: "auto", backgroundRepeat: "repeat", backgroundPosition: "center center", backgroundImage: "url('https://static.wixstatic.com/media/84770f_1fb4564174274a7bbf84eb9f3df9afda~mv2.png/v1/crop/x_0,y_1,w_110,h_19,q_85/84770f_1fb4564174274a7bbf84eb9f3df9afda~mv2.webp')"}}></div>  

        {/* Content */}
          <div style={{height: "100vh"/*, background: "url('https://cdn.discordapp.com/attachments/331651297453539329/570655862851633195/Capture.PNG') no-repeat center center"*/}}>
            <div className ="container-fluid" style={{ padding: "0 15em", background: "url('https://static.wixstatic.com/media/a9ff3b_38e5f9b5a82546a689f8013ed6fce03b.png/v1/fill/w_408,h_408,al_c,q_85/a9ff3b_38e5f9b5a82546a689f8013ed6fce03b.webp')", backgroundColor: "rgb(43, 158, 217)" }}>
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