import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

const NavLinks = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <img src="/logo192.png" alt="Logo" height="40" />
      
      <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <NavLink to="/home" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
        <NavLink to="/services" onClick={() => setIsMenuOpen(false)}>Services</NavLink>
        <NavLink to="/team" onClick={() => setIsMenuOpen(false)}>Team</NavLink>
        <NavLink to="/whyus" onClick={() => setIsMenuOpen(false)}>Why Us</NavLink>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Log In</NavLink>
        <NavLink to="/Register" onClick={() => setIsMenuOpen(false)}>Register</NavLink>
        <NavLink to="/users" onClick={() => setIsMenuOpen(false)}>Register Users</NavLink>
      </div>
    </div>
  );
};

export default NavLinks;
