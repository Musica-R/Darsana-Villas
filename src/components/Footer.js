import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";

// const TORN_SVG = (
//   <svg viewBox="0 0 1440 90" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M0,0 L0,55 C28,48 54,68 82,62 C112,56 132,34 162,40 C192,46 212,66 242,60 C272,54 292,32 322,38 C354,44 372,64 402,58 C432,52 452,30 482,36 C514,42 530,62 562,56 C592,50 612,28 642,34 C672,40 692,60 722,54 C752,48 770,26 802,32 C832,38 852,58 882,52 C912,46 932,24 962,30 C994,36 1010,56 1042,50 C1072,44 1092,22 1122,28 C1152,34 1172,54 1202,48 C1232,42 1252,20 1282,26 C1312,32 1332,52 1362,46 C1392,40 1420,22 1440,28 L1440,0 Z" fill="#1A0C04"/>
//   </svg>
// );

function Footer() {
  return (
    <>
      {/* <div className="footer-torn-top">{TORN_SVG}</div> */}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="f-logo">Darsana  <span>Events</span></div>
            <div className="f-tagline">LUXURY EVENT VENUE · BANGALORE</div>
            <p>A sanctuary of elegance where love stories unfold, milestones are celebrated, and memories are crafted to last a lifetime. Bangalore's most cherished luxury event destination since 2009.</p>
            <div className="footer-social">
              <a className="f-social-btn" href="/"> <FaInstagram /> </a>
              <a className="f-social-btn" href="/"> <FaFacebookF /> </a>
              <a className="f-social-btn" href="/"> <FaYoutube /> </a>
              <a className="f-social-btn" href="/"> <FaTwitter /> </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>NAVIGATE</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/venues">Our Venues</Link></li>
              <li><Link to="/stay">Stay &amp; Amenities</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>SERVICES</h4>
            <ul>
              <li><a href="/event">Weddings</a></li>
              <li><a href="/event">Receptions</a></li>
              <li><a href="/event">Corporate Events</a></li>
              <li><a href="/event">Garden Soirées</a></li>
              <li><a href="/event">Private Parties</a></li>
              <li><a href="/event">Cultural Events</a></li>
              <li><a href="/event">Gala Dinners</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>CONTACT US</h4>
            <div className="f-contact-item">
              <span className="f-contact-label">ADDRESS</span>
              <span className="f-contact-val"> PJJ6+866, Kuzhalmannam East,<br />Kerala 678702</span>

            </div>
            <div className="f-contact-item">
              <span className="f-contact-label">PHONE</span>
              <span className="f-contact-val">77362 57634<br /></span>
            </div>
            <div className="f-contact-item">
              <span className="f-contact-label">EMAIL</span>
              <span className="f-contact-val">events@darsanaeventsgarden.in</span>
            </div>
            <div className="f-contact-item">
              <span className="f-contact-label">HOURS</span>
              <span className="f-contact-val">Mon–Sat: 10 AM – 7 PM<br />Sun: By Appointment</span>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p>© 2025 Darsana Events. All Rights Reserved.</p>

            <a href="https://mpeoples.in/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit", cursor: "pointer"}}><p>Developed by Mpeoples </p></a>

          <nav>
            {/* <a href="/">Privacy Policy</a>
            <a href="/">Terms of Use</a> */}
            <a href="/contact">Sitemap</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
