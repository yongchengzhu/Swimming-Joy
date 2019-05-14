import React from 'react';
import { connect } from 'react-redux';

import { signout } from '../actions';

class Signout extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentDidMount() {
    this.props.signout(() => this.props.history.push('/'));
  }
  
  render() {
    return <div>Signout Component</div>;
  }
}

export default connect(null, { signout })(Signout);