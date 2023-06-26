import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { FormBarang, Home, ListBarang, Login, Register } from '../../Pages';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/ListBarang">
          <ListBarang />
        </Route>
        <Route path="/FormBarang">
          <FormBarang/>
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes
