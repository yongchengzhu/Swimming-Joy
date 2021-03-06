import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Programs from './Programs';
import About from './About';
import Contact from './Contact';
import Signup from './Signup';
import Signin from './Signin';
import Signout from './Signout';
import Checkout from './Checkout';
import Test from './Test';
import Success from './Success';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Homepage} exact />
          <Route path="/programs" component={Programs} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/signin" component={Signin} exact />
          <Route path="/signout" component={Signout} exact />
          <Route path="/test" component={Test} exact />
          <Route path="/checkout" component={Checkout} exact />
          <Route path="/success" component={Success} exact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;