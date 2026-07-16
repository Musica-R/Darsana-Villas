import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Wrench,
  Images,
  Home,
  Mail,
  MoreHorizontal,
  Info,
  BedDouble,
  Building2,
  CalendarDays,
   Gem,
} from 'lucide-react';
import '../styles/BottomNavbar.css';

function BottomNavbar() {
  const [moreOpen, setMoreOpen] = useState(false);
  const sheetRef = useRef(null);
  const navigate = useNavigate();

  // Close sheet on outside click / touch
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        sheetRef.current &&
        !sheetRef.current.contains(e.target) &&
        !e.target.closest('.bn__more-btn')
      ) {
        setMoreOpen(false);
      }
    }
    if (moreOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [moreOpen]);

  // Lock body scroll when sheet is open
  useEffect(() => {
    document.body.style.overflow = moreOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [moreOpen]);

  // Close sheet on Escape
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === 'Escape') setMoreOpen(false);
    }
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  const goTo = (path) => {
    setMoreOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* Backdrop behind the More sheet */}
      <div
        className={`bn__backdrop ${moreOpen ? 'show' : ''}`}
        onClick={() => setMoreOpen(false)}
      />

      {/* More sheet */}
      <div className={`bn__sheet ${moreOpen ? 'open' : ''}`} ref={sheetRef}>
        <div className="bn__sheet-handle" />

        {/* <button className="bn__sheet-item" onClick={() => goTo('/about')}>
          <Info strokeWidth={1.6} />
          <span>About</span>
        </button> */}

        <button className="bn__sheet-item" onClick={() => goTo('/stay')}>
          <BedDouble strokeWidth={1.6} />
          <span>Stay</span>
        </button>

        <button className="bn__sheet-item" onClick={() => goTo('/venues')}>
          <Building2 strokeWidth={1.6} />
          <span>Venues</span>
        </button>

        <button className="bn__sheet-item" onClick={() => goTo('/event')}>
          <CalendarDays strokeWidth={1.6} />
          <span>Events</span>
        </button>
      </div>

      {/* Bottom bar — mobile only */}
      <nav className="bn__bar">

         <NavLink
          to="/gallery"
          className={({ isActive }) => `bn__item ${isActive ? 'active' : ''}`}
          onClick={() => setMoreOpen(false)}
        >
          <Images strokeWidth={1.6} />
          <span>Gallery</span>
        </NavLink>

        <NavLink
          to="/services"
          className={({ isActive }) => `bn__item ${isActive ? 'active' : ''}`}
          onClick={() => setMoreOpen(false)}
        >
          <Gem strokeWidth={1.6} />
          <span>Packages</span>
        </NavLink>

       

        <NavLink
          to="/"
          end
          className={({ isActive }) => `bn__item bn__home ${isActive ? 'active' : ''}`}
          onClick={() => setMoreOpen(false)}
        >
          <span className="bn__home-circle">
            <Home strokeWidth={1.8} />
          </span>
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => `bn__item ${isActive ? 'active' : ''}`}
          onClick={() => setMoreOpen(false)}
        >
          <Mail strokeWidth={1.6} />
          <span>Contact</span>
        </NavLink>

        <button
          className={`bn__item bn__more-btn ${moreOpen ? 'active' : ''}`}
          onClick={() => setMoreOpen((o) => !o)}
        >
          <MoreHorizontal strokeWidth={1.8} />
          <span>More</span>
        </button>
      </nav>
    </>
  );
}

export default BottomNavbar;