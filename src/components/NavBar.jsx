import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = () => (
  <nav className="nav">
    <Link to="/" className="logo">Math Magicians</Link>
    <ul className="nav-items">
      <li className="nav-item">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/calculator">Calculator</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/quote">Quote</NavLink>
      </li>
    </ul>
  </nav>
);
export default NavBar;
