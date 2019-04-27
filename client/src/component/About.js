import React from 'react';
import { Header, Container, Segment } from 'semantic-ui-react';

import Heading from './Heading';
import Footer from './Footer';

class About extends React.Component {
  render() {
    return (
      <div style={{  }}>
        <Segment vertical style={{ border:"none", margin: "0", paddingBottom: "0", backgroundColor: "rgb(26, 76, 102)" }}>
          <Heading page="about" />
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
        <div style={{ background: "url('https://static.wixstatic.com/media/a9ff3b_38e5f9b5a82546a689f8013ed6fce03b.png/v1/fill/w_408,h_408,al_c,q_85/a9ff3b_38e5f9b5a82546a689f8013ed6fce03b.webp')", backgroundColor: "rgb(43, 158, 217)" }}>
          {/* About Us */}
          <div className="container-fluid" style={{ padding: "0 15em"}}>
            <div className="row">
              <div className="col" style={{ textAlign: "center", margin: "4em 0em" }}>
                <p style={{ fontSize: "3em", fontWeight: "100", fontFamily: "MuseoW01-700", color: "white" }}>About Us</p>
                <p style={{ fontWeight: "100", fontSize: "18px", color: "white" }}>Joy Swimming Inc is a standard and well-equipped chlorinated 25 yards 
                  indoor swimming pool located in the heart of the rockaway’s towns. Our main 
                  goal on setting this business is with the aim to engage and encourage parents 
                  and as well kids to participate in sport activity since one’s promotes health, 
                  can help keep a healthy lifestyle, self-therapy, stress reliver, , fitness, fun, 
                  socialization and most of all learn a life saving skill that one day could save 
                  their own life or some else’s life. As well teach adults and kids how to defend 
                  and handle difficult situations in deep waters by providing the necessaries skills 
                  from fundamentals to high-level techniques.
                </p>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div style={{ width: "100%", height: "37px", backgroundSize: "auto", backgroundPosition: "center center", backgroundImage: "url('https://static.wixstatic.com/media/84770f_effc02db3b64431fa384e9028bc63812~mv2.png/v1/crop/x_0,y_0,w_218,h_33,q_85/84770f_effc02db3b64431fa384e9028bc63812~mv2.webp')" }}></div>
        
          {/* Our Mission */}
          <div className="container-fluid" style={{ padding: "0 15em"}}>
            <div className="row">
              <div className="col" style={{ textAlign: "center", margin: "4em 0em" }}>
                <p style={{ fontSize: "3em", fontWeight: "100", fontFamily: "MuseoW01-700", color: "white" }}>Our Mission</p>
                <p style={{ fontWeight: "100", fontSize: "18px", color: "white" }}>
                  JSI's mission is to provide a sport facility that enhances the health, fitness, 
                  safety, recreation and quality of life for all in Joy Swimming Inc. An indoor 
                  pool facility which will include multiple swimming activities such as competition, 
                  water challenges and other related activities and engage commuters in sporting 
                  activities, health and fitness and to fight against obesity and unhealthy lifestyle.
                </p>
              </div>
            </div>
          </div>

          {/* Separator */}
          <div style={{ width: "100%", height: "37px", backgroundSize: "auto", backgroundPosition: "center center", backgroundImage: "url('https://static.wixstatic.com/media/84770f_effc02db3b64431fa384e9028bc63812~mv2.png/v1/crop/x_0,y_0,w_218,h_33,q_85/84770f_effc02db3b64431fa384e9028bc63812~mv2.webp')" }}></div>
        
          {/* Open Hours */}
          <div className="container-fluid" style={{ padding: "0 15em"}}>
            <div className="row">
              <div className="col" style={{ textAlign: "center", margin: "4em 0em" }}>
                <p style={{ fontSize: "3em", fontWeight: "100", fontFamily: "MuseoW01-700", color: "white" }}>Open Hours</p>
                <p style={{ fontWeight: "100", fontSize: "18px", color: "white" }}>
                  Joy Swimming Inc will be opened Monday - Thursday from 8AM - 6PM weekends 
                  (Fridays to Sundays) and from 7:00 am to 6:00 pm to offer the most flexibles 
                  schedule and for us to be able to accommodate customer with different time 
                  preference also to recruit enough staff to run shift among our workforce. We will 
                  go out of our way to acquire standard equipment and other customers’ needs or 
                  requests to keep them happy and be able to provide a healthier environment. 
                </p>
              </div>
            </div>
          </div>
        </div>

          {/* Absolute Position Content */}
          
          {/* <div className="container-fluid" style={{ backgroundColor: "seashell", left: "0", opacity: "0.8" }}>
            <div className="row align-items-center" style={{ height: "40vh" }}>
              <div className="col" style={{ padding: "0 15em" }}>
                <p style={{ fontSize: "20px", fontWeight: "600" }}>OUR MISSION:</p>
                <p style={{ fontSize: "30px", fontWeight: "600" }}>Providing Healthy And Effective Trainings For All Swimmers</p>
                <p>
                  JSI's mission is to provide a sport facility that enhances the health, fitness, 
                  safety, recreation and quality of life for all in Joy Swimming Inc. An indoor 
                  pool facility which will include multiple swimming activities such as competition, 
                  water challenges and other related activities and engage commuters in sporting 
                  activities, health and fitness and to fight against obesity and unhealthy lifestyle.
                </p>
              </div>
            </div>
          </div> */}
          

          
          {/* <div className="container-fluid" style={{ padding: "0 15em", background: "url('https://static.wixstatic.com/media/a9ff3b_38e5f9b5a82546a689f8013ed6fce03b.png/v1/fill/w_408,h_408,al_c,q_85/a9ff3b_38e5f9b5a82546a689f8013ed6fce03b.webp')", backgroundColor: "rgb(43, 158, 217)" }}>
            <div className="row">
              <div className="col" style={{ textAlign: "center", margin: "4em 0em" }}>
                <p style={{ fontSize: "3em", fontWeight: "100" }}>Open Hours</p>
                <p style={{ fontWeight: "100", fontSize: "18px" }}>
                  Joy Swimming Inc will be opened Monday - Thursday from 8AM - 6PM weekends 
                  (Fridays to Sundays) and from 7:00 am to 6:00 pm to offer the most flexibles 
                  schedule and for us to be able to accommodate customer with different time 
                  preference also to recruit enough staff to run shift among our workforce. We will 
                  go out of our way to acquire standard equipment and other customers’ needs or 
                  requests to keep them happy and be able to provide a healthier environment.  
                </p>
              </div>
            </div>
          </div> */}

          {/* <Container text style={{ marginTop: "4em", marginBottom: '4em' }}>
            <Header as="h1">About</Header>

            <p><strong>Joy Swimming Inc</strong> is a standard and well-equipped chlorinated 25 yards indoor swimming pool located in the heart of the rockaway’s towns. Our main goal on setting this business is with the aim to engage and encourage parents and as well kids to participate in sport activity since one’s promotes health, can help keep a healthy lifestyle, self-therapy, stress reliver, , fitness, fun, socialization and most of all learn a life saving skill that one day could save their own life or some else’s life. As well teach adults and kids how to defend and handle difficult situations in deep waters by providing the necessaries skills from fundamentals to high-level techniques.</p>
            <p>After conducting numerous studies and researches of the area we have decided that the Rockway’s town is what we have been looking for to start our small business and settle our swimming facility. A pool facility easy to access with public transportation within 2 blocks from its current location. Excessive amount of parking to accommodate any number of customers. We believe Joy Swimming Inc will be the leading swimming facility in the Rockaways town and we will work hard and try our best to provide the best services and be able to satisfy our customer needs by providing them with flexible swimming schedules. In fact, our major target is to motivative family and commuters to participate more in sports activities.</p>
          
            <p><strong>Joy Swimming Inc</strong> will be opened Monday-Thursday from 8AM-6PM weekends (Fridays to Sundays) and from 7:00 am to 6:00 pm to offer the most flexibles schedule and for us to be able to accommodate customer with different time preference also to recruit enough staff to run shift among our workforce. We will go out of our way to acquire standard equipment and other customers’ needs or requests to keep them happy and be able to provide a healthier environment.</p>
            <p><strong>Joy Swimming Inc</strong> will be a family owned business, the business will be managed by Elvis Salcedo & Nikki Kwok, with a well over 8 years of experienced swimming instructors and 7 years in pool management in the United States.</p>
          </Container> */}
        
        <Footer />
      </div>
    );
  }
}

export default About;