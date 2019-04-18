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

import Footer from './Footer';
import { fetchUser } from '../actions';

// 
// Homepage Heading
// 
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Swimming Joy"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
      }}
    />
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
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: /*700*/"100vh"/*, padding: "1em 0em"*/ }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
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
                  {/* <Menu.Item
                    as={Link}
                    to="/signup"
                    inverted={!fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Sign Up
                  </Menu.Item>
                  <Menu.Item as={Link} to="/signin" inverted={!fixed}>
                    Sign in
                  </Menu.Item> */}
                </Menu.Menu>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
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
    <Segment style={{ height: "100vh", padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              Anyone Are Welcomed
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              By 'anyone', we MEAN anyone. Our program is open to all ages, from infant to elderly. We DO NOT discriminate against any race! Even if you're a cat, an ape, a bonobo, or an attack helicoptor, we sincerely invite you to join our wonderful program today.
            </p>
            <Header as="h3" style={{ fontSize: "2em" }}>
              We've Trained the Chubbiest Bananas to Swim
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Oh yes, you're goddamn right. Even bananas can swim if they participate in our swimming program. Join us, or if not, you may as well go eat a banana.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image
              bordered
              rounded
              size="large"
              src="http://cdn.shopify.com/s/files/1/2040/0303/products/Happy_Cute_Kawaii_Fruit_Cartoon_Emoji_-_Banana_697268224_grande.jpg?v=1501028486"
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: "0em" }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "Wow..."
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Is what they all can say about us.
            </p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
            <Header as="h3" style={{ fontSize: "2em" }}>
              "Choosing Swimming Joy was the most correct decision of my life. They trained me well to swim all the way from my home country to the United States. God bless Swimming Joy!"
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              <b>Juan</b> Legal Citizen
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Footer />
  </ResponsiveContainer>
);

function mapStateToProps(state) {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { fetchUser })(Homepage);