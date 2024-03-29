import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route link='/' component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;
