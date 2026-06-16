import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Venues.css';
import { FaUsers, FaRulerCombined, FaLandmark, FaLeaf, FaSpa, FaWater, FaSun } from 'react-icons/fa';
import { FaUmbrellaBeach, FaCity, FaMoon } from 'react-icons/fa';

const venues = [
  {
    tag: 'OPEN AIR CELEBRATION',
    name: 'Open Lawn',
    img: '/assets/lawn..jpg',
    desc: 'A sweeping open lawn venue bathed in natural light and open skies — ideal for large traditional ceremonies, outdoor receptions, and grand gatherings that breathe freely under the sun.',
    meta: [
      { icon: <FaUsers />, text: 'LARGE GATHERINGS' },
      { icon: <FaLeaf />, text: 'OPEN AIR VENUE' },
      { icon: <FaSun />, text: 'NATURAL DAYLIGHT' },
    ],
    features: [
      'Spacious open-air setup',
      'Flexible seating arrangements',
      'Ideal for traditional ceremonies',
      'Ambient outdoor lighting',
      'Ample parking space',
    ],
  },
  {
    tag: 'INTIMATE & ELEGANT',
    name: 'Mini AC Hall',
    img: '/assets/ac.jpg',
    desc: 'A cosy, fully air-conditioned hall designed for intimate celebrations — offering a refined atmosphere with modern comforts for smaller gatherings and private events.',
    meta: [
      { icon: <FaUsers />, text: 'INTIMATE GATHERINGS' },
      { icon: <FaLandmark />, text: 'AIR CONDITIONED' },
      { icon: <FaSpa />, text: 'INDOOR VENUE' },
    ],
    features: [
      'Fully air-conditioned interiors',
      'Elegant décor & lighting setup',
      'Ideal for private functions',
      'Built-in AV system',
      'Dedicated catering area',
    ],
  },
  {
    tag: 'SEMI COVERED CHARM',
    name: 'Semi Covered Hall — I',
    img: '/assets/semi1.jpg',
    desc: 'A beautifully designed semi-covered space that blends the openness of an outdoor setting with the shelter of an enclosed structure — perfect for medium-scale events with a breezy ambience.',
    meta: [
      { icon: <FaUsers />, text: 'MEDIUM GATHERINGS' },
      { icon: <FaRulerCombined />, text: 'SEMI COVERED' },
      { icon: <FaLeaf />, text: 'OPEN SIDES' },
    ],
    features: [
      'Partially open-air with covered roof',
      'Natural ventilation & airflow',
      'Flexible layout configurations',
      'Ambient evening lighting',
      'Suitable for all seasons',
    ],
  },
  {
    tag: 'SEMI COVERED CHARM',
    name: 'Semi Covered Hall — II',
    img: '/assets/semi2.jpg',
    desc: 'Our second semi-covered hall offers the same airy, sheltered elegance — providing an additional spacious venue option for simultaneous or standalone celebrations.',
    meta: [
      { icon: <FaUsers />, text: 'MEDIUM GATHERINGS' },
      { icon: <FaRulerCombined />, text: 'SEMI COVERED' },
      { icon: <FaMoon />, text: 'EVENING EVENTS' },
    ],
    features: [
      'Partially open-air with covered roof',
      'Natural ventilation & airflow',
      'Flexible layout configurations',
      'Ambient evening lighting',
      'Suitable for all seasons',
    ],
  },
];

/* ── Single card with individually observed children ── */
function VenueCard({ v }) {
  const cardRef = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Collect every animated child in DOM order
    const children = card.querySelectorAll('.v-anim');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          // Reveal each child with a generous 260ms gap — slow & cinematic
          children.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('v-anim-in');
            }, i * 260);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="venue-card" ref={cardRef}>

      <div className="venue-card-img v-anim">
        <img src={v.img} alt={v.name} />
      </div>

      <div className="venue-card-body">
        <p className="venue-tag v-anim">{v.tag}</p>
        <h2 className="venue-name v-anim">{v.name}</h2>
        <p className="venue-desc v-anim">{v.desc}</p>

        <div className="venue-meta v-anim">
          {v.meta.map((m, j) => (
            <span className="venue-meta-item" key={j}>
              {m.icon}
              <span>{m.text}</span>
            </span>
          ))}
        </div>

        <ul className="venue-features">
          {v.features.map((f, j) => (
            <li className="v-anim" key={j}>{f}</li>
          ))}
        </ul>

        <Link to="/contact" className="btn-gold v-anim">
          ENQUIRE ABOUT THIS VENUE
        </Link>
      </div>

    </div>
  );
}

/* ── Page hero scroll animation ── */
function useScrollAnimate() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.sa-fade-up, .sa-word');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('sa-in');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      els.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 100);
    return () => clearTimeout(timer);
  }, []);
}

function Venues() {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  useScrollAnimate();

  return (
    <div className="venues-page">

      <section className="page-hero">
        <p className="section-label sa-fade-up">OUR SPACES</p>
        <h1 className="section-title">
          <span className="sa-word">Spaces That&nbsp;</span>
          <em className="sa-word sa-d1">Inspire</em>
        </h1>
        <p className="sa-fade-up sa-d2">
          From grand ballrooms to intimate garden pavilions, each of our venues is a masterpiece
          of luxury design — ready to be transformed for your perfect celebration.
        </p>
      </section>

      <div className="venues-grid">
        {venues.map((v, i) => (
          <VenueCard v={v} key={i} />
        ))}
      </div>

      <section className="cta-banner">
        <h2 className="section-title">
          <span className="sa-word">Can't Decide?&nbsp;</span>
          <em className="sa-word sa-d1">We'll Guide You.</em>
        </h2>
        <p className="sa-fade-up sa-d2">
          Our venue specialists are happy to walk you through every space and help you
          find the perfect match for your vision and guest count.
        </p>
        <Link to="/contact" className="btn-gold sa-fade-up sa-d3">SPEAK WITH A SPECIALIST</Link>
      </section>

    </div>
  );
}

export default Venues;