import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from './Homepage';
import About from './About';
import Signup from './Signup';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Homepage} exact />
          <Route path="/about" component={About} exact/>
          <Route path="/signup" component={Signup} exact/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;