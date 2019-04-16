import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Homepage from './Homepage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Homepage} exact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;