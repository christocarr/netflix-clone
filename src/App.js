import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <p>Sign in page</p>
        </Route>
        <Route path="/signup">
          <p>Sign up page</p>
        </Route>
        <Route path="/browse">
          <p>Browse page</p>
        </Route>
        <Route path="/">
          <p>Home page</p>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
