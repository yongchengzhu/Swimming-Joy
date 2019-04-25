import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import "semantic-ui-css/semantic.min.css";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Responsive,
  Segment,
  Visibility,
  Menu
} from "semantic-ui-react";
import Jumbotron from 'react-bootstrap/Jumbotron';

import Test from './Test';
import Footer from './Footer';
import { fetchUser } from '../actions';
import './Homepage.css';
// 
// Homepage Heading
// 
const HomepageHeading = ({ mobile }) => (
  <Container text style={{ textAlign: "center", position: "absolute", left: "0", right: "0", marginLeft: "auto", marginRight: "auto", top: "50%", marginTop: "-176.5px" }}>
    <Header
      as="h1"
      content="Joy Swimming"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "2em",
        display: "inline-block",
        verticalAlign: "bottom"
      }}
    />
    <img src="https://i.imgur.com/vb0Zv9V.png" style={{ width: "125px", display: "inline" }}></img>
    <Header
      as="h2"
      content="Your only opportunity to swim the duck out of your life."
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    />
    <Button primary size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

// 
// Desktop Container
// 
class DesktopContainer extends React.Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  componentDidMount() {
    this.props.fetchUser();
  }

  renderLinks() {
    if (this.props.auth.authenticated) {
      return (
        <React.Fragment>
          <Menu.Item>
            {this.props.auth.name}
          </Menu.Item>
          <Menu.Item
            as={Link}
            to="/signout"
            inverted={!this.state.fixed}
          >
            Sign Out
          </Menu.Item>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Menu.Item
            as={Link}
            to="/signup"
            inverted={!this.state.fixed}
            style={{ marginLeft: "0.5em" }}
          >
            Sign Up
          </Menu.Item>
          <Menu.Item
            as={Link} to="/signin"
            inverted={!this.state.fixed}
          >
            Sign In
          </Menu.Item>
        </React.Fragment>
      );
    }
  }

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive /*minWidth={Responsive.onlyTablet.minWidth}*/>
        <Visibility
          once={false}
          // onBottomPassed={this.showFixedMenu}
          // onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment vertical style={{ position: "absolute", left: "0", right: "0", zIndex: "1", border: "none" }}>
            <Menu
                fixed={fixed ? "top" : null}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size="large"
                stackable
                style={{ border: "none", position: "absolute", left: "0", right: "0", zIndex: "1" }}
              >
                <Container>
                  <Menu.Item as="a" active>
                    Home
                  </Menu.Item>
                  <Menu.Item as={Link} to="/programs">Programs</Menu.Item>
                  <Menu.Item as={Link} to="/about">About</Menu.Item>
                  <Menu.Item as={Link} to="/contact">Contact</Menu.Item>
                  <Menu.Menu position="right">
                    {this.renderLinks()}
                  </Menu.Menu>
                </Container>
              </Menu>
          </Segment>
          <Test />
          {/* <Segment
            inverted
            textAlign="center"
            style={{ height: "100vh", backgroundColor: "rgba(0,0,0,0.2)" }}
            vertical
          > */}
            {/* <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
              stackable
              style={{ border: "none", position: "absolute", left: "0", right: "0" }}
            >
              <Container>
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as={Link} to="/programs">Programs</Menu.Item>
                <Menu.Item as={Link} to="/about">About</Menu.Item>
                <Menu.Item as={Link} to="/contact">Contact</Menu.Item>
                <Menu.Menu position="right">
                  {this.renderLinks()}
                </Menu.Menu>
              </Container>
            </Menu> */}
            <HomepageHeading />
          {/* </Segment> */}
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

// 
// Responsive Container
// 
const ResponsiveContainer = ({ children, auth, fetchUser }) => (
  <div>
    <DesktopContainer auth={auth} fetchUser={fetchUser}>{children}</DesktopContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

// 
// Homepage Component
// 
const Homepage = (props) => (
  <ResponsiveContainer auth={props.auth} fetchUser={props.fetchUser}>
    <div style={{ padding: "1em 0em", height: "100vh", display: "flex", flexDirection: "column" }}>
      <div className="container-fluid" style={{ /*backgroundColor: "steelblue",*/ flexGrow: "1", display: "flex", background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://cdn.swimswam.com/wp-content/uploads/2018/02/stock-by-Mike-Lewis-LDM_1946.jpg') no-repeat center center fixed", backgroundSize: "cover" }}>
        <div className="row align-items-center" style={{ flexGrow: "1" }}>
          <div className="col">
            <div className="row">
              <div className="col" align="center">
                <Header id="underline" as="h1" style={{ color: "white" }}>BECOME THE SWIMMER YOU DREAMED TO BE</Header>
              </div>
            </div>
            <div className="row justify-content-center" style={{ marginTop: "5em" }}>
              <div className="col-4" align="right">
                <Segment circular inverted secondary color="red" style={{ border: "none", width: "250px", height: "250px"/*, background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg')", backgroundPosition: "center" */}}>
                  <Header style={{ color: "white" }}> Hardwork </Header>
                  <Header.Subheader style={{ color: "white", fontSize: "15px" }}>Life rewards those who work hard on it.</Header.Subheader>
                </Segment>
              </div>
              <div className="col-4" align="center">
                <Segment circular inverted secondary color="blue" style={{ width: "250px", height: "250px"/*, background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg')"*/ }}>
                  <Header style={{ color: "white" }}>Dedication</Header>
                  <Header.Subheader style={{ color: "white", fontSize: "15px" }}>Relentless practice is the key to become the best.</Header.Subheader>
                </Segment>
              </div>
              <div className="col-4" align="left">
                <Segment circular inverted secondary color="green" style={{ width: "250px", height: "250px"/*, background: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg')"*/ }}>
                  <Header style={{ color: "white" }}>Perseverance</Header>
                  <Header.Subheader style={{ color: "white", fontSize: "15px" }}>The last man standing is the winner.</Header.Subheader>
                </Segment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <img style={{ height: "100vh", width: "100%", position: "absolute", opacity: "0.6", zIndex: "-1" }} src="https://www.sciencedaily.com/images/2018/11/181114132013_1_540x360.jpg" />
    <img style={{ height: "100vh", width: "100%", position: "absolute", opacity: "0.6", zIndex: "0" }} src="https://www.solidbackgrounds.com/images/950x350/950x350-white-solid-color-background.jpg" />
    <div class="container-fluid" style={{ textAlign: "center", zIndex: "1" }}>
      <div className="row align-items-center" style={{ height: "100vh" }}>
        <div className="col">
          <Header as="h1" style={{ marginBottom: "1em", fontSize: "3em" }}>HOW IT WORKS</Header>
          <div class="row align-items-start justify-content-around">
            <div class="col-3" style={{ textAlign: "center"}}>
              <i class="fab fa-think-peaks" style={{ fontSize: "10em"}}></i>
              <Header as="h3">CHOOSE PLAN</Header>
              <p>Get your personalized swim workout</p>
            </div>
            <div class="col-3" style={{ textAlign: "center"}}>
            <i class="fas fa-swimmer" style={{ fontSize: "10em"}}></i>
              <Header as="h3">START WORKOUT</Header>
              <p>Follow your structured swim program to improve your techniques</p>
            </div>
            <div class="col-3" style={{ textAlign: "center"}}>
              <i class="fas fa-tasks" style={{ fontSize: "10em"}}></i>
              <Header as="h3">TRACK PROGRESS</Header>
              <p>Measure progress toward your goals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </ResponsiveContainer>
);

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { fetchUser })(Homepage);