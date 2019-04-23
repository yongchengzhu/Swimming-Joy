import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Heading from './Heading';
import Footer from './Footer';
import './Signup.css';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <Segment style={{ minHeight: "100vh", margin: "0", display: "flex", flexDirection: "column" }}>
          <Heading />
          <div className="container" style={{ flexGrow: "1",display: "flex", flexDirection: "column"  }}>
            <div className="row justify-content-center align-items-center" style={{ flexGrow: "1" }}>
              <div className="col-7" >
                <Header id="title" as="h2" textAlign="center">
                  Confirm Payment
                </Header>
                <div className="ui segment">
                  <p>Order: {this.props.order.title}</p>
                  <p>Quantity: {this.props.order.quantity}</p>
                  <p>Cost: {this.props.order.cost}</p>
                </div>
                <div className="row justify-content-center">
                  <div className="col-3">
                    <div className="ui primary button">Check Out</div>
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

export default connect(mapStateToProps)(Checkout);