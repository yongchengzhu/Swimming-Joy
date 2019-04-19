import React from 'react';
import { 
  Segment,
  Container,
  Header,
  Button,
  Grid
} from 'semantic-ui-react';

import Heading from './Heading';
import Footer from './Footer';

class Programs extends React.Component {
  render() {
    const square = { width: 170, height: 250, display: "flex", alignItems: "center", justifyContent: "center" }

    return (
      <div>
        <Segment style={{ minHeight: "100vh", margin: "0" }}>
          <Heading page="program" />
          <Container text style={{ marginTop: "4em"}}>
          <Header as="h1">Programs</Header>
          <Grid columns={4}>
            <Grid.Row>
              <Grid.Column>
                <Segment style={square} textAlign='center'>
                  <Header as="h4">
                    Red Cross Lifeguard Training
                    <div style={{ fontSize: "30px", marginTop: "30px" }}>$250</div>
                    <div style={{ color: "grey", marginTop: "10px", marginBottom: "20px" }}>PER TRAINING</div>
                    <Button secondary>Select</Button>
                  </Header>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment style={square} textAlign='center'>
                  <Header as="h4">
                    Adults Swim Program
                    <div style={{ fontSize: "30px", marginTop: "30px" }}>$175</div>
                    <div style={{ color: "grey", marginTop: "10px", marginBottom: "20px" }}>PER 8 LESSONS</div>
                    <Button secondary>Select</Button>
                  </Header>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment style={square} textAlign='center'>
                  <Header as="h4">
                    Teens Swim Program
                    <div style={{ fontSize: "30px", marginTop: "50px" }}>$170</div>
                    <div style={{ color: "grey", marginTop: "10px", marginBottom: "20px" }}>PER 8 LESSONS</div>
                    <Button secondary>Select</Button>
                  </Header>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment style={square} textAlign='center'>
                  <Header as="h4">
                    Kids Swim Program
                    <div style={{ fontSize: "30px", marginTop: "50px" }}>$165</div>
                    <div style={{ color: "grey", marginTop: "10px", marginBottom: "20px" }}>PER 8 LESSONS</div>
                    <Button secondary>Select</Button>
                  </Header>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            
            <Grid.Row>
            <Grid.Column>
                <Segment style={square} textAlign='center'>
                  <Header as="h4">
                    Mother & Baby Classes
                    <div style={{ fontSize: "30px", marginTop: "30px" }}>$190</div>
                    <div style={{ color: "grey", marginTop: "10px", marginBottom: "20px" }}>PER 8 LESSONS</div>
                    <Button secondary>Select</Button>
                  </Header>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment style={square} textAlign='center'>
                  <Header as="h4">
                    Boys' & Girls' Night
                    <div style={{ fontSize: "30px", marginTop: "50px" }}>$175</div>
                    <div style={{ color: "grey", marginTop: "10px", marginBottom: "20px" }}>PER 100 DAYS</div>
                    <Button secondary>Select</Button>
                  </Header>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment style={square} textAlign='center'>
                  <Header as="h4">
                    Adults Membership
                    <div style={{ fontSize: "30px", marginTop: "50px" }}>$25</div>
                    <div style={{ color: "grey", marginTop: "10px", marginBottom: "20px" }}>PER YEAR</div>
                    <Button secondary>Select</Button>
                  </Header>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Container>
        </Segment>
        <Footer />
      </div>
    );
  }
}

export default Programs;