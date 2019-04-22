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