import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="nav">
    <Link to="/" className="logo">Math Magicians</Link>
    <ul className="nav-items">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/calculator">Calculator</Link>
      </li>
      <li className="nav-item">
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);
export default NavBar;
