// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import
import './nav.scss';

// == Composant
const Nav = () => (
  <nav className="nav">
    <div className="nav-items">
      <NavLink
        to="/personnalite"
        className="nav-item"
        id="personnality"
        activeClassName="nav-item-personnality_active"
        exact
      >
        Personnalité
      </NavLink>
      <NavLink
        to="/projet"
        className="nav-item"
        id="project"
        activeClassName="nav-item-project_active"
        exact
      >
        Projet
      </NavLink>
      <NavLink
        to="/contact"
        className="nav-item"
        id="contact"
        activeClassName="nav-item-contact_active"
        exact
      >
        Contact
      </NavLink>
    </div>
  </nav>
);

// == Export
export default Nav;
