import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

import Heading from './Heading';
import Title from './Title';
import Footer from './Footer';
import Payments from './Payments';
import './Signup.css';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
          <Segment vertical style={{ border:"none", margin: "0", paddingBottom: "0", backgroundColor: "rgb(26, 76, 102)" }}>
            <Heading />
          </Segment>

          {/* Page Title */}
          <Title />

          {/* Wavy Separator */}
          <div style={{ width: "100%", height: "18px", backgroundSize: "auto", backgroundRepeat: "repeat", backgroundPosition: "center center", backgroundImage: "url('https://static.wixstatic.com/media/84770f_1fb4564174274a7bbf84eb9f3df9afda~mv2.png/v1/crop/x_0,y_1,w_110,h_19,q_85/84770f_1fb4564174274a7bbf84eb9f3df9afda~mv2.webp')"}}></div>  

          <div className="container-fluid" style={{ display: "flex", flexDirection: "column", flexGrow: "1", background: "url('https://static.wixstatic.com/media/a9ff3b_38e5f9b5a82546a689f8013ed6fce03b.png/v1/fill/w_408,h_408,al_c,q_85/a9ff3b_38e5f9b5a82546a689f8013ed6fce03b.webp')", backgroundColor: "rgb(43, 158, 217)"  }}>
            <div className="row justify-content-center align-items-center" style={{ flexGrow: "1" }}>
              <div className="col-7" >
                <Header id="title" as="h2" textAlign="center" style={{ fontFamily: "MuseoW01-700", color: "White" }}>
                  Confirm Payment
                </Header>
                <div className="ui segment">
                  <p style={{ fontFamily: "MuseoW01-700", fontSize: "1em" }}>Your Purchase:</p>
                  <Segment>
                    <div className="container" style={{ padding: "0" }}>
                      <div className="row">
                        <div className="col-2">
                          <p style={{ fontFamily: "MuseoW01-700"  }}>Order:</p>
                          <p style={{ fontFamily: "MuseoW01-700"  }}>Quantity:</p>
                          <p style={{ fontFamily: "MuseoW01-700"  }}>Cost:</p>
                        </div>
                        <div className="col">
                          <p>{this.props.order.title}</p>
                          <p>{this.props.order.quantity}</p>
                          <p>{this.props.order.cost}</p>
                        </div>
                      </div>
                    </div>
                    {/* <p>Order: {this.props.order.title}</p>
                    <p>Quantity: {this.props.order.quantity}</p>
                    <p>Cost: {this.props.order.cost}</p> */}
                  </Segment>
                  <div className="row justify-content-center">
                    <p style={{ padding: "0 1em" }}><em>*Note: Please do not refresh the current page. Once we've processed your payment, we cannot issue refunds. Please confirm order details before making your purchase!</em></p>
                    <Payments history={this.props.history} />
                  </div>
                </div>
                {/* <div className="row justify-content-center">
                  <div className="col-3">
                    <Payments />
                  </div>
                </div> */}
                {/* End column */}
              </div>
              {/* End row */}
            </div>
            {/* End container */}
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

export default connect(mapStateToProps)(Checkout);