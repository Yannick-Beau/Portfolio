// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import { Home, GitHub, Linkedin } from 'react-feather';

// == Import
import Nav from './Nav';
import './header.scss';

// == Composant
const Header = () => (
  <header>
    <div className="header-start">
      <NavLink
        to="/"
        className="header-start"
        activeClassName="header-start_active"
        exact
      >
        <Home />
      </NavLink>
      <div className="link-networks">
        <a id="link-github" href="https://github.com/Yannick-Beau" target="_blank" rel="noreferrer"><GitHub /></a>
        <a id="link-linkedin" href="https://www.linkedin.com/in/yannick-beau/" target="_blank" rel="noreferrer"><Linkedin /></a>
      </div>
    </div>
    <Nav />
    <Switch>
      <Route path="/" exact>
        <div className="header-end">YB</div>
      </Route>
    </Switch>
  </header>
);

// == Export
export default Header;
