// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home } from 'react-feather';

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
    </div>
    <Nav />
    {/* <div className="header-end">YB</div> */}
  </header>
);

// == Export
export default Header;
