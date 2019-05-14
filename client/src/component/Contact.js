import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';

import Heading from './Heading';
import Title from './Title';
import Footer from './Footer';

class Contact extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div style={{  }}>
        <Segment vertical style={{ border:"none", margin: "0", paddingBottom: "0", backgroundColor: "rgb(26, 76, 102)" }}>
          <Heading page="contact" style={{ paddingBottom: "0" }} />
        </Segment>

         {/* Page Title */}
         <Title />

        {/* Wavy Seperator */}
        <div style={{ width: "100%", height: "18px", backgroundSize: "auto", backgroundRepeat: "repeat", backgroundPosition: "center center", backgroundImage: "url('https://static.wixstatic.com/media/84770f_1fb4564174274a7bbf84eb9f3df9afda~mv2.png/v1/crop/x_0,y_1,w_110,h_19,q_85/84770f_1fb4564174274a7bbf84eb9f3df9afda~mv2.webp')"}}></div>  

        {/* Background Container */}
        <div style={{ background: "url('https://static.wixstatic.com/media/a9ff3b_38e5f9b5a82546a689f8013ed6fce03b.png/v1/fill/w_408,h_408,al_c,q_85/a9ff3b_38e5f9b5a82546a689f8013ed6fce03b.webp')", backgroundColor: "rgb(43, 158, 217)" }}>
          {/* Contact Container */}
          <div className ="container-fluid" style={{ padding: "3em 15em" }}>
            {/* Contact Us Row */}
            <div className="row">
              <div className="col-7">
                <p style={{ fontFamily: "MuseoW01-700", fontSize: "3em", color: "white" }}>Contact Us</p>
                <p style={{ fontSize: "1.7em", color: "white" }}>
                  Joy Swimming is located in the heart of the Rockaways town. The center is open 6 days a week, and on most public holidays.
                </p>
              </div>
              <div className="col">
                <img src={require('../images/baby.webp')} style={{ width: "12em", position: "absolute", left: "0" }} />
                <img src={require('../images/bubbles.webp')} style={{ width: "5em", position: "absolute", right: "0" }} />
              </div>
            </div>

            {/* Opening Times Row */}
            <div className="row" style={{ marginTop: "2em" }}>
              <div className="col">
                <p style={{ color: "white", lineHeight: "1.4" }}>
                  <span style={{ fontFamily: "MuseoW01-700", fontSize: "1.5em" }}>Opening Times</span><br />
                  <span style={{ fontSize: "1.7em" }}>Mon - Thu: 8am - 6pm <br />
                  Fri - Sun: 7am - 6pm
                  </span>
                </p>
                <img src={require('../images/swimmer.webp')} style={{ width: "23em", position: "absolute", bottom: "0", left: "40%" }} />
                <img src={require('../images/ring2.webp')} style={{ width: "6em", position: "absolute", right: "5%", top: "0" }} />
              </div>

              {/* <div className="col">
                <img src={require('../images/ring2.webp')} style={{ width: "6em", position: "absolute", right: "5%" }} />
              </div> */}
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
                    For any questions please contact us on 929-306-9175 or fill out your details and one of our
                    Joy Swimming representatives will get back to you as soon as possible.
                </p>
                <img src={require('../images/swimmer2.webp')} style={{ width: "24em" }} />
                <img src={require('../images/sweat.webp')} style={{ width: "3em", marginLeft: "1em" }} />
              </div>

              {/* Form Column */}
              <div className="col" align="right">
                <form className="ui form">
                  <div className="field">
                    <input placeholder="Name" />
                  </div>
                  <div className="field">
                    <input placeholder="Email" />
                  </div>
                  <div className="field">
                    <input placeholder="Phone" />
                  </div>
                  <div className="field">
                    <textarea />
                  </div>
                  <div><button className="ui button">Submit</button></div>
                </form>
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