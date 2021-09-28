// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router';

// == Import
import Header from '../Header';
import Home from '../Main/Home';
import Personnality from '../Main/Personnality';
import './styles.scss';

// == Composant
const Portfolio = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/personnalite" exact>
        <Personnality />
      </Route>
    </Switch>
  </div>
);

// == Export
export default Portfolio;
