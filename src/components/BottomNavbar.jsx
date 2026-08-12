import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Images,
  Home,
  Mail,
  BedDouble,
  Gem,
} from 'lucide-react';
import '../styles/BottomNavbar.css';

function BottomNavbar() {
  return (
    <nav className="bn__bar">
      <NavLink
        to="/gallery"
        className={({ isActive }) => `bn__item ${isActive ? 'active' : ''}`}
      >
        <Images strokeWidth={1.6} />
        <span>Gallery</span>
      </NavLink>

      <NavLink
        to="/services"
        className={({ isActive }) => `bn__item ${isActive ? 'active' : ''}`}
      >
        <Gem strokeWidth={1.6} />
        <span>Packages</span>
      </NavLink>

      <NavLink
        to="/"
        end
        className={({ isActive }) => `bn__item bn__home ${isActive ? 'active' : ''}`}
      >
        <span className="bn__home-circle">
          <Home strokeWidth={1.8} />
        </span>
        <span>Home</span>
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) => `bn__item ${isActive ? 'active' : ''}`}
      >
        <Mail strokeWidth={1.6} />
        <span>Contact</span>
      </NavLink>

      <NavLink
        to="/stay"
        className={({ isActive }) => `bn__item ${isActive ? 'active' : ''}`}
      >
        <BedDouble strokeWidth={1.6} />
        <span>Stay</span>
      </NavLink>
    </nav>
  );
}

export default BottomNavbar;