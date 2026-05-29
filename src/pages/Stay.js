import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Stay.css';
import { MdOutlineBathtub } from "react-icons/md";
import { FaUtensils, FaCar, FaConciergeBell, FaSwimmingPool } from "react-icons/fa";
import { IoLeaf } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { FaWineGlassAlt } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";


function Stay() {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  return (
    <div className="stay-page">
      <section className="page-hero">
        <p className="section-label">STAY WITH US</p>
        <h1 className="section-title">Rest in <em>Luxury</em>,<br />Awaken to Beauty</h1>
        <p>Our exclusive on-estate accommodations ensure your celebration extends seamlessly from ceremony to sunrise. Indulge in thoughtfully appointed suites surrounded by our lush gardens.</p>
      </section>

      {/* ROOMS GRID */}
      <div className="stay-rooms-grid">
        {[
          {
            img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80',
            tag: 'THE JEWEL', name: 'Royal Bridal Suite',
            desc: 'A magnificent 2,000 sq ft suite with private garden terrace, four-poster bed, marble bathroom with soaking tub, and personal butler service. The grandest expression of luxury on the estate.',
            meta: (
              <div className="stay-room-meta-icons">
                <span><FaUserFriends /> 2 GUESTS</span>&nbsp;&nbsp;&nbsp;
                <span><MdOutlineBathtub /> PRIVATE SPA BATH</span>&nbsp;&nbsp;&nbsp;
                <span><IoLeaf /> GARDEN VIEW</span>
              </div>
            )
          },
          {
            img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=900&q=80',
            tag: 'GARDEN WING', name: 'Blossom Garden Suite',
            desc: 'Nestled amongst rose gardens, each suite opens onto a private courtyard. King bed, elegantly appointed sitting room, and direct garden access for a serene morning retreat.',
            meta: (
              <div className="stay-room-meta-icons">
                <span><FaUserFriends /> 2–4 GUESTS</span>&nbsp;&nbsp;&nbsp;
                <span><IoLeaf /> GARDEN TERRACE</span>&nbsp;&nbsp;&nbsp;
                <span><MdWbSunny /> ALL DAY LIGHT</span>
              </div>
            )
          },
          {
            img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=900&q=80',
            tag: 'LAKE WING', name: 'Lakeside Pavilion Suite',
            desc: 'Panoramic views of our private lake greet you from a private balcony. Sunset-facing orientation with curated minibar and in-room dining from our award-winning kitchen.',
            meta: (
              <div className="stay-room-meta-icons">
                <span><FaUserFriends /> 2 GUESTS</span>&nbsp;&nbsp;&nbsp;
                <span><MdOutlineWbSunny /> LAKE VIEWS</span>&nbsp;&nbsp;&nbsp;
                <span><FaWineGlassAlt /> IN-ROOM DINING</span>
              </div>
            )
          },
        ].map((r, i) => (
          <div className="stay-room" key={i}>
            <img src={r.img} alt={r.name} />
            <div className="stay-room-overlay" />
            <div className="stay-room-info">
              <p className="stay-room-tag">{r.tag}</p>
              <h3 className="stay-room-name">{r.name}</h3>
              <p className="stay-room-desc">{r.desc}</p>
              <span className="stay-room-meta">{r.meta}</span>
            </div>
          </div>
        ))}
      </div>

      {/* AMENITIES BAR */}
      <div className="amenities-strip">
        <div className="amenities-strip-inner">
          {[
            {
              icon: <MdOutlineBathtub />,
              name: 'SPA & WELLNESS',
              desc: 'Full-service in-house spa with Ayurvedic treatments'
            },
            {
              icon: <FaUtensils />,
              name: 'FINE DINING',
              desc: 'Award-winning restaurant open sunrise to midnight'
            },
            {
              icon: <IoLeaf />,
              name: 'GARDENS',
              desc: '50 acres of curated botanical landscapes'
            },
            {
              icon: <FaSwimmingPool />,
              name: 'POOL & LAKE',
              desc: 'Infinity pool and private lakeside swimming area'
            },
            {
              icon: <FaCar />,
              name: 'CHAUFFEUR',
              desc: 'Private car service for guests and wedding party'
            },
            {
              icon: <FaConciergeBell />,
              name: 'BUTLER SERVICE',
              desc: '24-hour personal butler for all suite guests'
            }
          ].map((a, i) => (
            <div className="amenity-item" key={i}>
              <span className="amenity-icon">{a.icon}</span>
              <div className="amenity-name">{a.name}</div>
              <div className="amenity-desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* BRIDAL SUITE FEATURE */}
      <div className="stay-feature">
        <div className="stay-feature-imgs">
          <div className="stay-f-main"><img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80" alt="Bridal suite interior" /></div>
          <div className="stay-f-small"><img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&q=80" alt="Spa bathroom" /></div>
        </div>
        <div>
          <p className="section-label">AN EXCLUSIVE EXPERIENCE</p>
          <h2 className="section-title">The Bridal <em>Suite</em></h2>
          <div className="gold-divider"><span>✦</span></div>
          <p className="section-body">Our Royal Bridal Suite is designed as a sanctuary of calm and luxury for the most important day of your life. Prepare in absolute serenity surrounded by fresh blooms, fine fabrics, and attentive personal service.</p>
          <p className="section-body" style={{ marginTop: '14px' }}>The suite includes a dedicated bridal dressing room with floor-to-ceiling mirrors, champagne service, in-room hair &amp; makeup stations, and a private garden terrace for post-ceremony moments.</p>
          <ul className="feat-list" style={{ marginTop: '28px' }}>
            <li>Dedicated bridal dressing room with full mirror wall</li>
            <li>Personal butler &amp; in-room champagne service</li>
            <li>Marble spa bath with curated bath ritual</li>
            <li>Private garden terrace with seating for 6</li>
            <li>Complimentary next-morning breakfast in suite</li>
          </ul>
          <Link to="/contact" className="btn-gold" style={{ marginTop: '30px', display: 'inline-block' }}>ENQUIRE ABOUT STAY</Link>
        </div>
      </div>
    </div>
  );
}

export default Stay;
