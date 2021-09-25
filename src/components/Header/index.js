// == Import npm
import React from 'react';

// == Import
import Nav from './Nav';
import './header.scss';

// == Composant
const Header = () => (
  <header>
    <div className="header-start">Home</div>
    <Nav />
    <div className="header-end">Portfolio</div>
  </header>
);

// == Export
export default Header;
