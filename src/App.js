import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/home'
import Signin from './pages/signin'
import Signup from './pages/signup'
import Browse from './pages/browse'
import * as Routes from './constants/routes'


function App() {
  return (
    <Router>
      <Switch>
        <Route path={Routes.SIGN_IN}>
          <Signin />
        </Route>
        <Route path={Routes.SIGN_UP}>
          <Signup />
        </Route>
        <Route path={Routes.BROWSE}>
          <Browse />
        </Route>
        <Route path={Routes.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
