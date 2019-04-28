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

        {/* Background Container */}
        <div style={{ background: "url('https://static.wixstatic.com/media/a9ff3b_38e5f9b5a82546a689f8013ed6fce03b.png/v1/fill/w_408,h_408,al_c,q_85/a9ff3b_38e5f9b5a82546a689f8013ed6fce03b.webp')", backgroundColor: "rgb(43, 158, 217)" }}>
          {/* Contact Container */}
          <div className ="container-fluid" style={{ padding: "3em 15em" }}>
            {/* Contact Us Row */}
            <div className="row">
              <div className="col">
                <p style={{ fontFamily: "MuseoW01-700", fontSize: "57px", color: "white" }}>Contact Us</p>
                <p style={{ fontSize: "24px", color: "white" }}>
                  Joy Swimming is located in the heart of the Rockaways town. The center is open 6 days a week, and on most public holidays.
                </p>
              </div>
              <div className="col" align="center">
                [Images Here]
              </div>
            </div>

            {/* Opening Times Row */}
            <div className="row" style={{ marginTop: "2em" }}>
              <div className="col">
                <p style={{ color: "white" }}>
                  <span style={{ fontFamily: "MuseoW01-700", fontSize: "21px" }}>Opening Times</span><br />
                  <span style={{ fontSize: "24px" }}>Mon - Thu: 8am - 6pm <br />
                  Fri - Sun: 7am - 6pm
                  </span>
                </p>
              </div>

              <div className="col" align="center">
                [Images Here]
              </div>
            </div>
          </div>

          {/* Separator */}
          <div style={{ width: "100%", height: "37px", backgroundSize: "auto", backgroundPosition: "center center", backgroundImage: "url('https://static.wixstatic.com/media/84770f_effc02db3b64431fa384e9028bc63812~mv2.png/v1/crop/x_0,y_0,w_218,h_33,q_85/84770f_effc02db3b64431fa384e9028bc63812~mv2.webp')" }}></div>

          {/* Contact Form Container*/}
          <div className="container-fluid" style={{ padding: "3em 15em" }}>
            <div className="row">
              {/* Text Column */}
              <div className="col">
                <p style={{ fontSize: "24px", color: "white" }}>
                    For any queries please contact us on 929-306-9175 or fill out your details and one of our
                    Joy Swimming representatives will get back to you as soon as possible.
                </p>
                [Image goes here]
              </div>

              {/* Form Column */}
              <div className="col" align="center">
                [Form goes here]
              </div>
            </div>
          </div>
          {/* End of background container */}
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