import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Stay.css';
import { MdOutlineBathtub } from "react-icons/md";
import { FaUtensils, FaCar, FaConciergeBell } from "react-icons/fa";
import { IoLeaf } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { FaWineGlassAlt } from "react-icons/fa";

function Stay() {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  return (
    <div className="stay-page">
      <section className="page-hero">
        <p className="section-label">STAY WITH US</p>
        <h1 className="section-title">Stay Close, <em>Stay Comfortable</em></h1>
        <p>Our 4 fully furnished 2BHK service apartments are available exclusively for guests — offering a home-like retreat with modern amenities, just steps away from the celebrations.</p>
      </section>

      {/* ROOMS GRID — 4 in one row */}
      <div className="stay-rooms-grid">
        {[
          {
            img: '/ass/ev/Villa5.png',
            tag: 'Spacious Bedroom', name: '2 BHK Service Villas for Families',
            desc: 'A spacious and fully furnished 2-bedroom apartment with a comfortable living area, modern kitchen, and all essential amenities — ideal for families or wedding party guests seeking a home-like stay.',
            meta: (
              <div className="stay-room-meta-icons">
                <span><FaUserFriends /> 4–6 GUESTS</span>&nbsp;&nbsp;&nbsp;
                <span><MdOutlineBathtub /> 2 BATHROOMS</span>&nbsp;&nbsp;&nbsp;
                <span><IoLeaf /> GARDEN VIEW</span>
              </div>
            )
          },
          {
            img: '/ass/ev/Villa4.png',
            tag: 'Elegant Bedroom', name: '2 BHK Service Villas for Families',
            desc: 'A well-appointed 2-bedroom service apartment with a fully equipped kitchen, spacious living room, and private balcony — offering comfort and convenience throughout your celebration stay.',
            meta: (
              <div className="stay-room-meta-icons">
                <span><FaUserFriends /> 4–6 GUESTS</span>&nbsp;&nbsp;&nbsp;
                <span><MdOutlineBathtub /> 2 BATHROOMS</span>&nbsp;&nbsp;&nbsp;
                <span><MdWbSunny /> BALCONY VIEW</span>
              </div>
            )
          },
          {
            img: '/ass/ev/Villa2.png',
            tag: 'Living Room', name: '2 BHK Service Villas for Families',
            desc: 'Thoughtfully designed for extended stays, this 2BHK apartment blends modern interiors with warm hospitality — complete with daily housekeeping, in-room dining, and all utilities included.',
            meta: (
              <div className="stay-room-meta-icons">
                <span><FaUserFriends /> 4–6 GUESTS</span>&nbsp;&nbsp;&nbsp;
                <span><FaWineGlassAlt /> IN-ROOM DINING</span>&nbsp;&nbsp;&nbsp;
                <span><MdWbSunny /> ALL DAY LIGHT</span>
              </div>
            )
          },
          {
            img: '/ass/ev/Villa 3.png',
            tag: 'Kitchen', name: '2 BHK Service Villas for Families',
            desc: 'A premium 2-bedroom service apartment with elegant furnishings, a fully equipped kitchen, and a serene atmosphere — perfect for guests who want privacy and comfort close to the celebrations.',
            meta: (
              <div className="stay-room-meta-icons">
                <span><FaUserFriends /> 4–6 GUESTS</span>&nbsp;&nbsp;&nbsp;
                <span><MdOutlineBathtub /> 2 BATHROOMS</span>&nbsp;&nbsp;&nbsp;
                <span><IoLeaf /> QUIET SETTING</span>
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
              {/* <span className="stay-room-meta">{r.meta}</span> */}
            </div>
          </div>
        ))}
      </div>

      {/* AMENITIES BAR */}
      <div className="amenities-strip">
        <div className="amenities-strip-inner">
          {[
            {
              icon: <FaUtensils />,
              name: 'FULLY EQUIPPED KITCHEN',
              desc: 'Each apartment includes a modern kitchen with all essentials'
            },
            {
              icon: <FaConciergeBell />,
              name: 'DAILY HOUSEKEEPING',
              desc: 'Housekeeping service provided every day of your stay'
            },
            {
              icon: <FaCar />,
              name: 'PARKING',
              desc: 'Dedicated parking space for every apartment'
            },
            {
              icon: <IoLeaf />,
              name: 'PEACEFUL SURROUNDINGS',
              desc: 'Quiet, green setting within the venue premises'
            },
            {
              icon: <FaWineGlassAlt />,
              name: 'IN-ROOM DINING',
              desc: 'Food service available on request during your stay'
            },
            {
              icon: <FaUserFriends />,
              name: 'FAMILY FRIENDLY',
              desc: 'Spacious layout suitable for families and groups'
            },
          ].map((a, i) => (
            <div className="amenity-item" key={i}>
              <span className="amenity-icon">{a.icon}</span>
              <div className="amenity-name">{a.name}</div>
              <div className="amenity-desc">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* GROUP STAY CTA */}
      <section className="cta-banner">
        <h2 className="section-title">
          Planning a <em>Group Stay?</em>
        </h2>
        <p>All 4 service apartments can be reserved together for your wedding party — ensuring your closest family and friends stay right at the heart of the celebration.</p>
        <Link to="/contact" className="btn-gold" style={{ marginTop: '24px', display: 'inline-block' }}>
          ENQUIRE ABOUT STAY
        </Link>
      </section>

    </div>
  );
}

export default Stay;