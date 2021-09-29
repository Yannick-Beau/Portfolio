// == Import npm
import React from 'react';
import { Switch, Route } from 'react-router';

// == Import
import Header from '../Header';
import Home from '../Main/Home';
import Presentation from '../Main/Presentation';
import Project from '../Main/Project';
import Contact from '../Main/Contact';
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
        <Presentation />
      </Route>
      <Route path="/projet" exact>
        <Project />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
    </Switch>
  </div>
);

// == Export
export default Portfolio;
