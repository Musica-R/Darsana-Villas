import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styles/MobileNavbar.css';

function MobileNavbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>

      <NavLink onClick={() => setMenuOpen(false)} to="/" end>HOME</NavLink>
      {/* <NavLink onClick={() => setMenuOpen(false)} to="/about">ABOUT</NavLink> */}
      <NavLink onClick={() => setMenuOpen(false)} to="/venues">VENUES</NavLink>
      <NavLink onClick={() => setMenuOpen(false)} to="/event">EVENTS</NavLink>

      <NavLink onClick={() => setMenuOpen(false)} to="/stay">STAY</NavLink>
      <NavLink onClick={() => setMenuOpen(false)} to="/services">PACKAGES</NavLink>
      <NavLink onClick={() => setMenuOpen(false)} to="/gallery">GALLERY</NavLink>
      <NavLink onClick={() => setMenuOpen(false)} to="/contact">CONTACT</NavLink>

    </div>
  );
}

export default MobileNavbar;