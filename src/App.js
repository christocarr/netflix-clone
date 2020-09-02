import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/home'
import * as Routes from './constants/routes'

function App() {
  return (
    <Router>
      <Switch>
        <Route path={Routes.SIGN_IN}>
          <p>Sign in page</p>
        </Route>
        <Route path={Routes.SIGN_UP}>
          <p>Sign up page</p>
        </Route>
        <Route path={Routes.BROWSE}>
          <p>Browse page</p>
        </Route>
        <Route path={Routes.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
