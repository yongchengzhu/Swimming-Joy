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

class Programs extends React.Component {
  onButtonClick = (title, price, quantity) => {
    this.props.createOrder(title, price, quantity, () => this.props.history.push('/checkout'));
  }

  render() {
    const square = { width: 170, height: 250, display: "flex", alignItems: "center", justifyContent: "center" }

    return (
      <div>
        <Segment style={{ minHeight: "100vh", margin: "0" }}>
          <Heading page="program" />
          <div className="container" style={{ fontWeight: "100" }}>
            <div className="row" >
              <div className="col" style={{ textAlign: "center", margin: "4em 0em" }}>
                <p style={{ fontSize: "3em", fontWeight: "100" }}>Something for Everyone</p>
                <p style={{ fontWeight: "100" }}>Whether you want to train to become an athlete, a lifeguard, or just to workout, we have you covered. </p>
              </div>
            </div>
            <div className="row align-items-center" style={{ minHeight: "100vh" }}>
              <div className="col" style={{ textAlign: "center" }}>
                {/* First row */}
                <div className="row justify-content-center" style={{ margin: "1em 0em", height: "35em" }}>
                  <div className="col-3" style={{ border: "1px solid lightgrey", margin: "0em 1em", borderRadius: "25px" }}>
                      <div className="row align-items-center" style={{ height: "100%", padding: "0 1em" }}>
                        <i className="fas fa-life-ring" style={{ fontSize: "9em", position: "absolute", top: "50px", left: "0", right: "0" }} />
                        <div className="col">
                          <div style={{ textAlign: "left" }}>
                            <Header as="h2" style={{ textAlign: "center", fontWeight: "100" }}>Lifeguard Training</Header>
                            <div style={{ position: "absolute" }}>
                              <p>Effective trainings and guidances from our professional trainers.</p>
                              <ul>
                                <li>40 Hours of Training</li>
                                <li>CPR Course</li>
                                <li>Swimming & Written Exams</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div style={{ position: "absolute", bottom:"20px", left: "0", right: "0", textAlign: "center" }}>
                              <Header as="h3" style={{ fontWeight: "100" }}>$250.00</Header>
                              <Button onClick={ () => this.onButtonClick('Lifeguard Training', 1, 250) } primary style={{ borderRadius:"25px", width: "10em" }}>SELECT</Button>
                        </div>
                      </div>
                  </div>
                  <div className="col-3" style={{ border: "1px solid lightgrey", margin: "0em 1em", borderRadius: "25px" }}>
                    <div className="row align-items-center" style={{ height: "100%", padding: "0 1em" }}>
                      <i className="fas fa-swimmer" style={{ fontSize: "9em", position: "absolute", top: "50px", left: "0", right: "0" }} />
                      <div className="col">
                        <div style={{ textAlign: "left" }}>
                          <Header as="h2" style={{ textAlign: "center", fontWeight: "100" }}>Adults Program</Header>
                          <div style={{ position: "absolute" }}>
                            <p>Trainee must be over the age of 18. Learn to swim in less than a month.</p>
                            <ul>
                              <li>8 Lessons</li>
                              <li>Basic Level Swimming</li>
                              <li>Safety Skills</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div style={{ position: "absolute", bottom:"20px", left: "0", right: "0" }}>
                            <Header as="h3" style={{ fontWeight: "100" }}>$175.00</Header>
                            <Button onClick={ () => this.onButtonClick('Adults Program', 1, 175) } primary style={{ borderRadius:"25px", width: "10em" }}>SELECT</Button>
                      </div>
                    </div>
                  </div>
                  <div className="col-3" style={{ border: "1px solid lightgrey", margin: "0em 1em", borderRadius: "25px" }}>
                    <div className="row align-items-center" style={{ height: "100%", padding: "0 1em" }}>
                      <i className="fas fa-running" style={{ fontSize: "9em", position: "absolute", top: "50px", left: "0", right: "0" }} />
                      <div className="col">
                        <div style={{ textAlign: "left" }}>
                          <Header as="h2" style={{ textAlign: "center", fontWeight: "100" }}>Teens Program</Header>
                          <div style={{ position: "absolute" }}>
                            <p>Trainee must be 10-17 years old. Learn basic swimming techniques.</p>
                            <ul>
                              <li>8 Lessons</li>
                              <li>Swim Without Assistance</li>
                              <li>Athletic Trainings</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div style={{ position: "absolute", bottom:"20px", left: "0", right: "0" }}>
                            <Header as="h3" style={{ fontWeight: "100" }}>$170.00</Header>
                            <Button onClick={ () => this.onButtonClick('Teens Program', 1, 170) } primary style={{ borderRadius:"25px", width: "10em" }}>SELECT</Button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Second Row */}
                <div className="row justify-content-center" style={{ margin: "1em 0em", height: "35em" }}>
                  <div className="col-3" style={{ border: "1px solid lightgrey", margin: "0em 1em", borderRadius: "25px" }}>
                    <div className="row align-items-center" style={{ height: "100%", padding: "0 1em" }}>
                      <i className="fas fa-child" style={{ fontSize: "9em", position: "absolute", top: "50px", left: "0", right: "0" }} />
                      <div className="col">
                        <div style={{ textAlign: "left" }}>
                          <Header as="h2" style={{ textAlign: "center", fontWeight: "100" }}>Kids Program</Header>
                          <div style={{ position: "absolute" }}>
                            <p>Trainee must be 6-9 years old. Learn basic aquatic skills.</p>
                            <ul>
                              <li>8 Lessons</li>
                              <li>Swim Assistance</li>
                              <li>Breath Control</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div style={{ position: "absolute", bottom:"20px", left: "0", right: "0" }}>
                            <Header as="h3" style={{ fontWeight: "100" }}>$165.00</Header>
                            <Button onClick={ () => this.onButtonClick('Kids Program', 1, 165) } primary style={{ borderRadius:"25px", width: "10em" }}>SELECT</Button>
                      </div>
                    </div>
                  </div>
                  <div className="col-3" style={{ border: "1px solid lightgrey", margin: "0em 1em", borderRadius: "25px" }}>
                    <div className="row align-items-center" style={{ height: "100%", padding: "0 1em" }}>
                      <i className="fas fa-baby" style={{ fontSize: "9em", position: "absolute", top: "50px", left: "0", right: "0" }} />
                      <div className="col">
                        <div style={{ textAlign: "left" }}>
                          <Header as="h2" style={{ textAlign: "center", fontWeight: "100" }}>Mom & Baby Class</Header>
                          <div style={{ position: "absolute" }}>
                            <p>Introductory swimming course for toddlers and parents.</p>
                            <ul>
                              <li>8 Lessons</li>
                              <li>Parents / Guardians required</li>
                              <li>Get toddler familiar with water</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div style={{ position: "absolute", bottom:"20px", left: "0", right: "0" }}>
                            <Header as="h3" style={{ fontWeight: "100" }}>$190.00</Header>
                            <Button onClick={ () => this.onButtonClick('Mom & Baby Class', 1, 190) } primary style={{ borderRadius:"25px", width: "10em" }}>SELECT</Button>
                      </div>
                    </div>
                  </div>
                  <div className="col-3" style={{ border: "1px solid lightgrey", margin: "0em 1em", borderRadius: "25px" }}>
                    <div className="row align-items-center" style={{ height: "100%", padding: "0 1em" }}>
                      <i className="fas fa-glass-cheers" style={{ fontSize: "9em", position: "absolute", top: "50px", left: "0", right: "0" }} />
                      <div className="col">
                        <div style={{ textAlign: "left" }}>
                          <Header as="h2" style={{ textAlign: "center", fontWeight: "100" }}>Boys' & Girls' Night</Header>
                          <div style={{ position: "absolute" }}>
                            <p>Reserve our spacious campus for the night.</p>
                            <ul>
                              <li>Maximum 50 people</li>
                              <li>No age restrictions</li>
                              <li>Time to Party!</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div style={{ position: "absolute", bottom:"20px", left: "0", right: "0" }}>
                            <Header as="h3" style={{ fontWeight: "100" }}>$100.00</Header>
                            <Button onClick={ () => this.onButtonClick("Boys' & Girls' Night", 1, 100) } primary style={{ borderRadius:"25px", width: "10em" }}>SELECT</Button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Third Row */}
                <div className="row justify-content-center" style={{ margin: "1em 0em", height: "35em" }}>
                  <div className="col-3" style={{ border: "1px solid lightgrey", margin: "0em 1em", borderRadius: "25px" }}>
                    <div className="row align-items-center" style={{ height: "100%", padding: "0 1em" }}>
                      <i className="fas fa-swimming-pool" style={{ fontSize: "9em", position: "absolute", top: "50px", left: "0", right: "0" }} />
                      <div className="col">
                        <div style={{ textAlign: "left" }}>
                          <Header as="h2" style={{ textAlign: "center", fontWeight: "100" }}>Adults Membership</Header>
                          <div style={{ position: "absolute" }}>
                            <p>Keep up with your swimming everyday.</p>
                            <ul>
                              <li>Unlimited Facility Access</li>
                              <li>Personal Trainer</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div style={{ position: "absolute", bottom:"20px", left: "0", right: "0" }}>
                            <Header as="h3" style={{ fontWeight: "100" }}>$25.00</Header>
                            <Button onClick={ () => this.onButtonClick('Adults Membership', 1, 25) } primary style={{ borderRadius:"25px", width: "10em" }}>SELECT</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Segment>
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