import React from 'react';
import { Segment } from 'semantic-ui-react';

import Heading from './Heading';

class Checkout extends React.Component {
  render() {
    return (
      <Segment style={{ minHeight: "100vh", margin: "0", display: "flex", flexDirection: "column" }}>
        <Heading />
      </Segment>
    );
  }
}

export default Checkout;