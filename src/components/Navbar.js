import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import MobileNavbar from './MobileNavbar';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const heroSection = document.getElementById('hero-section');
    if (!heroSection) { setScrolled(true); return; }
    setScrolled(false);
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: '-120px 0px 0px 0px' }
    );
    observer.observe(heroSection);
    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>

        {/* LEFT — desktop nav / mobile hamburger */}
        <div className="navbar__left">
          {/* Desktop only */}
          <div className="nav-links desktop-only">
            <NavLink to="/" end>HOME</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/venues">VENUES</NavLink>
            <NavLink to="/event">EVENTS</NavLink>
          </div>
          {/* Mobile only */}
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* CENTER — Logo always */}
        <Link to="/" className="nav-logo">
          Darsana <span>Villas</span>
          <small>LUXURY EVENT VENUE</small>
        </Link>

        {/* RIGHT — desktop nav / empty placeholder mobile */}
        <div className="navbar__right">
          <div className="nav-links desktop-only">
            <NavLink to="/stay">STAY</NavLink>
            <NavLink to="/services">SERVICES</NavLink>
            <NavLink to="/gallery">GALLERY</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
          </div>
          {/* Spacer so logo stays centered on mobile */}
          <div className="mobile-spacer" />
        </div>

      </nav>

      <MobileNavbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}

export default Navbar;