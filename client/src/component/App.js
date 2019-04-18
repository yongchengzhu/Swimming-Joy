import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from './Homepage';
import Programs from './Programs';
import About from './About';
import Contact from './Contact';
import Signup from './Signup';
import Signin from './Signin';
import Signout from './Signout';

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
        </div>
      </BrowserRouter>
    );
  }
}

export default App;