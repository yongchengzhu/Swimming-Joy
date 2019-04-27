import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
  Segment,
  Container,
  Header,
  Button,
  Grid,
  Label
} from 'semantic-ui-react';

import { createOrder } from '../actions';
import Heading from './Heading';
import Footer from './Footer';
import Checkout from './Checkout';
import './font.css'

class Programs extends React.Component {
  onButtonClick = (title, price, quantity) => {
    this.props.createOrder(title, price, quantity, () => this.props.history.push('/checkout'));
  }

  render() {
    const square = { width: 170, height: 250, display: "flex", alignItems: "center", justifyContent: "center" }

    return (
      <div>
        <Segment vertical style={{ border:"none", margin: "0", paddingBottom: "0", backgroundColor: "rgb(26, 76, 102)" }}>
          <Heading page="program" />
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
          <div className="container-fluid" style={{ paddingBottom: "2em", fontWeight: "100", background: "url('https://static.wixstatic.com/media/a9ff3b_38e5f9b5a82546a689f8013ed6fce03b.png/v1/fill/w_408,h_408,al_c,q_85/a9ff3b_38e5f9b5a82546a689f8013ed6fce03b.webp')", backgroundColor: "rgb(43, 158, 217)" }}>
            <div className="row" >
              <div className="col" style={{ textAlign: "center", margin: "4em 0em" }}>
                <p style={{ fontSize: "57px", fontFamily: "MuseoW01-700", color: "white" }}>Something for Everyone</p>
                <p style={{ fontSize: "18px", fontFamily: "MuseoW01-700", color: "white" }}>Whether you want to train to become an athlete, a lifeguard, or just to workout, we have you covered. </p>
              </div>
            </div>
            <div className="row align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
              <div className="col-9" style={{ textAlign: "center", backgroundColor: "white", borderRadius: "25px" }}>
                {/* First row */}
                <div className="row justify-content-center" style={{ margin: "1em 0em"}}>
                  <div className="col" style={{ border: "1px solid #2B9ED9", margin: "0em 1em", borderRadius: "25px" }}>
                      <div className="row align-items-start" style={{ height: "100%", padding: "0 0em" }}>
                        <div className="col">
                          <i className="fas fa-life-ring" style={{ margin: "3vw 0", fontSize: "9vw" }} />
                          <div style={{ textAlign: "left" }}>
                            <Header as="h2" style={{ textAlign: "center", color: "#2B9ED9", fontFamily: "MuseoW01-700", fontSize: "1.8vw" }}>Lifeguard Training</Header>
                            <div style={{ fontFamily: "MuseoW01-700", color: "#1A4C66", textAlign: "center", fontSize: "1.1vw" }}>
                              <p style={{ textAlign: "left" }}>Effective trainings and guidances from our professional trainers.</p>
                              <ul style={{ textAlign: "left" }}>
                                <li>40 Hours of Training</li>
                                <li>CPR Course</li>
                                <li>Swimming & Written Exams</li>
                              </ul>
                              <p style={{ textAlign: "center", marginTop: "0", fontSize: "15px", fontSize: "1.1vw" }}>$250.00</p>
                              <Button onClick={ () => this.onButtonClick('Lifeguard Training', 1, 250) } style={{ marginBottom: "10px", borderRadius:"25px", width: "12vw", background: "#5CC5FD", color: "#FBFBFB", fontFamily: "MuseoW01-700" }}>SELECT</Button>
                            </div>
                          </div>
                        </div>
                        {/* <div style={{ position: "absolute", bottom: "10px", fontFamily: "MuseoW01-700" }}>
                            <p style={{ textAlign: "center", marginTop: "0", fontSize: "15px", fontSize: "1.1vw" }}>$250.00</p>
                            <Button onClick={ () => this.onButtonClick('Lifeguard Training', 1, 250) } style={{ marginBottom: "0px", borderRadius:"25px", width: "10em", background: "#5CC5FD", color: "#FBFBFB", fontFamily: "MuseoW01-700" }}>SELECT</Button>
                        </div> */}
                      </div>
                  </div>
                  <div className="col" style={{ border: "1px solid #2B9ED9", margin: "0em 1em", borderRadius: "25px" }}>
                    <div className="row align-items-start" style={{ height: "100%", padding: "0 0em" }}>
                      <div className="col">
                        <i className="fas fa-swimmer" style={{ margin: "3vw 0", fontSize: "9vw" }} />
                        <div style={{ textAlign: "left" }}>
                          <Header as="h2" style={{ textAlign: "center", color: "#2B9ED9", fontFamily: "MuseoW01-700", fontSize: "1.8vw" }}>Adults Program</Header>
                          <div style={{ fontFamily: "MuseoW01-700", color: "#1A4C66", textAlign: "center", fontSize: "1.1vw" }}>
                            <p style={{ textAlign: "left" }}>Trainee must be over the age of 18. Learn to swim in less than a month.</p>
                            <ul style={{ textAlign: "left" }}>
                              <li>8 Lessons</li>
                              <li>Basic Level Swimming</li>
                              <li>Safety Skills</li>
                            </ul>
                            <p style={{ textAlign: "center", marginTop: "0", fontSize: "15px", fontSize: "1.1vw" }}>$175.00</p>
                            <Button onClick={ () => this.onButtonClick('Adults Program', 1, 175) } primary style={{ marginBottom: "10px", borderRadius:"25px", width: "12vw", background: "#5CC5FD", color: "#FBFBFB", fontFamily: "MuseoW01-700" }}>SELECT</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ border: "1px solid #2B9ED9", margin: "0em 1em", borderRadius: "25px" }}>
                    <div className="row align-items-start" style={{ height: "100%", padding: "0 1em" }}>
                      <div className="col">
                        <i className="fas fa-running" style={{ margin: "3vw 0", fontSize: "9vw" }} />
                        <div style={{ textAlign: "left" }}>
                          <Header as="h2" style={{ textAlign: "center", color: "#2B9ED9", fontFamily: "MuseoW01-700", fontSize: "1.8vw" }}>Teens Program</Header>
                          <div style={{ fontFamily: "MuseoW01-700", color: "#1A4C66", textAlign: "center", fontSize: "1.1vw" }}>
                            <p style={{ textAlign: "left" }}>Trainee must be 10-17 years old. Learn basic techniques.</p>
                            <ul style={{ textAlign: "left" }}>
                              <li>8 Lessons</li>
                              <li>Swim Without Assistance</li>
                              <li>Athletic Trainings</li>
                            </ul>
                            <p style={{ textAlign: "center", marginTop: "0", fontSize: "15px", fontSize: "1.1vw" }}>$170.00</p>
                            <Button onClick={ () => this.onButtonClick('Teens Program', 1, 170) } primary style={{ marginBottom: "10px", borderRadius:"25px", width: "12vw", background: "#5CC5FD", color: "#FBFBFB", fontFamily: "MuseoW01-700" }}>SELECT</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Second Row */}
                <div className="row justify-content-center" style={{ margin: "1em 0em" }}>
                  <div className="col" style={{ border: "1px solid #2B9ED9", margin: "0em 1em", borderRadius: "25px" }}>
                    <div className="row align-items-start" style={{ height: "100%", padding: "0 0em" }}>
                      <div className="col">
                        <i className="fas fa-child" style={{ margin: "3vw 0", fontSize: "9vw" }} />
                        <div style={{ textAlign: "left" }}>
                          <Header as="h2" style={{ textAlign: "center", color: "#2B9ED9", fontFamily: "MuseoW01-700", fontSize: "1.8vw" }}>Kids Program</Header>
                          <div style={{ textAlign: "center", fontFamily: "MuseoW01-700", color: "#1A4C66", fontSize: "1.1vw" }}>
                            <p style={{ textAlign: "left" }}>Trainee must be 6-9 years old. Learn basic aquatic skills.</p>
                            <ul style={{ textAlign: "left" }}>
                              <li>8 Lessons</li>
                              <li>Swim Assistance</li>
                              <li>Breath Control</li>
                            </ul>
                            <p style={{ textAlign: "center", marginTop: "0", fontSize: "15px", fontSize: "1.1vw" }}>$165.00</p>
                            <Button onClick={ () => this.onButtonClick('Kids Program', 1, 165) } primary style={{ marginBottom: "10px", borderRadius:"25px", width: "12vw", background: "#5CC5FD", color: "#FBFBFB", fontFamily: "MuseoW01-700" }}>SELECT</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ border: "1px solid #2B9ED9", margin: "0em 1em", borderRadius: "25px" }}>
                    <div className="row align-items-start" style={{ height: "100%", padding: "0 1em" }}>
                      <div className="col">
                        <i className="fas fa-baby" style={{ margin: "3vw 0", fontSize: "9vw" }} />
                        <div style={{ textAlign: "left" }}>
                          <Header as="h2" style={{ textAlign: "center", color: "#2B9ED9", fontFamily: "MuseoW01-700", fontSize: "1.8vw" }}>Mom & Baby Class</Header>
                          <div style={{ textAlign: "center", fontFamily: "MuseoW01-700", color: "#1A4C66", fontSize: "1.1vw" }}>
                            <p style={{ textAlign: "left" }}>Introductory swimming course for toddlers and parents.</p>
                            <ul style={{ textAlign: "left" }}>
                              <li>8 Lessons</li>
                              <li>Parent required</li>
                              <li>Familiarize Water</li>
                            </ul>
                            <p style={{ textAlign: "center", marginTop: "0", fontSize: "15px", fontSize: "1.1vw" }}>$190.00</p>
                            <Button onClick={ () => this.onButtonClick('Mom & Baby Class', 1, 190) } primary style={{ marginBottom: "10px", borderRadius:"25px", width: "12vw", background: "#5CC5FD", color: "#FBFBFB", fontFamily: "MuseoW01-700" }}>SELECT</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col" style={{ border: "1px solid #2B9ED9", margin: "0em 1em", borderRadius: "25px" }}>
                    <div className="row align-items-start" style={{ height: "100%", padding: "0 1em" }}>
                      <div className="col">
                        <i className="fas fa-glass-cheers" style={{ margin: "3vw 0", fontSize: "9vw" }} />
                        <div style={{ textAlign: "left" }}>
                          <Header as="h2" style={{ textAlign: "center", color: "#2B9ED9", fontFamily: "MuseoW01-700", fontSize: "1.8vw" }}>Boys' & Girls' Night</Header>
                          <div style={{ textAlign: "center", fontFamily: "MuseoW01-700", color: "#1A4C66", fontSize: "1.1vw" }}>
                            <p style={{ textAlign: "left" }}>Reserve our spacious campus for the beautiful night.</p>
                            <ul style={{ textAlign: "left" }}>
                              <li>Maximum 50 people</li>
                              <li>No age restrictions</li>
                              <li>Time to Party!</li>
                            </ul>
                            <p style={{ textAlign: "center", marginTop: "0", fontSize: "15px", fontSize: "1.1vw" }}>$100.00</p>
                            <Button onClick={ () => this.onButtonClick("Boys' & Girls' Night", 1, 100) } primary style={{ marginBottom: "10px", borderRadius:"25px", width: "12vw", background: "#5CC5FD", color: "#FBFBFB", fontFamily: "MuseoW01-700" }}>SELECT</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Third Row */}
                <div className="row justify-content-center" style={{ margin: "1em 0em"}}>
                  <div className="" style={{ border: "1px solid #2B9ED9", margin: "0em 1em", borderRadius: "25px", width: "31%" }}>
                    <div className="row align-items-start" style={{ height: "100%", padding: "0 1em" }}>
                      <div className="col">
                        <i className="fas fa-swimming-pool" style={{ margin: "3vw 0", fontSize: "9vw" }} />
                        <div style={{ textAlign: "left" }}>
                          <Header as="h2" style={{ textAlign: "center", color: "#2B9ED9", fontFamily: "MuseoW01-700", fontSize: "1.8vw" }}>Adults Membership</Header>
                          <div style={{ textAlign: "center", fontFamily: "MuseoW01-700", color: "#1A4C66", fontSize: "1.1vw" }}>
                            <p style={{ textAlign: "left" }}>Keep up with your swimming everyday.</p>
                            <ul style={{ textAlign: "left" }}>
                              <li>Unlimited Facility Access</li>
                              <li>Personal Trainer</li>
                            </ul>
                            <p style={{ textAlign: "center", fontSize: "15px", fontSize: "1.1vw" }}>$25.00</p>
                            <Button onClick={ () => this.onButtonClick('Adults Membership', 1, 25) } primary style={{ marginBottom: "10px", borderRadius:"25px", width: "12vw", background: "#5CC5FD", color: "#FBFBFB", fontFamily: "MuseoW01-700" }}>SELECT</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        <Footer />
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    order: state.order
  }
}

export default connect(mapStateToProps, { createOrder })(Programs);