import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

import { handleToken } from '../actions';

class Payments extends React.Component {
  render() {
    return (
      <StripeCheckout
        name={this.props.order.title}
        amount={this.props.order.cost * 100} 
        token={token => this.props.handleToken(token, () => this.props.history.push('/success'))}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="ui button primary" style={{ borderRadius: "25px", background: "#5CC5FD", fontFamily: "MuseoW01-700" }}>Check Out</button>
      </StripeCheckout>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.order
  }
}

export default connect(mapStateToProps, { handleToken })(Payments);