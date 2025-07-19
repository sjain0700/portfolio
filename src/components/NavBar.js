import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from './Navbar.css';



function NavBar() {
  return (
    <nav className="Navbar">
      <h2 className="logo">MyPortfolio</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;