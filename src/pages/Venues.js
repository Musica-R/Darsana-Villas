import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Venues.css';
import { FaUsers, FaRulerCombined, FaLandmark, FaLeaf, FaSpa, FaWater, FaSun } from 'react-icons/fa';
import { FaUmbrellaBeach, FaCity, FaMoon } from 'react-icons/fa';

const venues = [
  {
    tag: 'THE GRANDEUR',
    name: 'The Golden Ballroom',
    img: '/assets/Ball1.webp',
    desc: 'Our most spectacular event space — a grand ballroom adorned with crystal chandeliers, gilded archways, and floor-to-ceiling drapes. Accommodating up to 2,000 guests in unparalleled luxury.',
    meta: [
      { icon: <FaUsers />, text: 'UP TO 2,000 GUESTS' },
      { icon: <FaRulerCombined />, text: '12,000 SQ FT' },
      { icon: <FaLandmark />, text: 'GRAND BALLROOM' },
    ],
    features: ['Crystal chandelier lighting system', 'Full AV & staging infrastructure', 'Dedicated bridal & groom suites', 'Adjacent garden terraces', 'Valet parking for 500 vehicles'],
  },
  {
    tag: 'GARDEN ELEGANCE',
    name: 'The Rose Garden',
    img: '/assets/rose.webp',
    desc: 'A romantic open-air setting surrounded by heritage rose arbours, manicured hedgerows, and a central fountain. Perfect for ceremonies and intimate garden soirées.',
    meta: [
      { icon: <FaUsers />, text: 'UP TO 800 GUESTS' },
      { icon: <FaLeaf />, text: '5 ACRES' },
      { icon: <FaSpa />, text: 'OUTDOOR VENUE' },
    ],
    features: ['Heritage rose arbours & archways', 'Sculptural water fountain centrepiece', 'Fairy-light canopy system', 'Weather-proof marquee option', 'Floral design studio on-site'],
  },
  {
    tag: 'INTIMATE LUXURY',
    name: 'The Ivory Pavilion',
    img: '/assets/white.webp',
    desc: 'An intimate yet breathtaking pavilion draped in white and ivory, with soaring ceilings, natural light, and a retractable glass roof that reveals the star-lit Bangalore sky.',
    meta: [
      { icon: <FaUsers />, text: 'UP TO 400 GUESTS' },
      { icon: <FaRulerCombined />, text: '4,500 SQ FT' },
      { icon: <FaLandmark />, text: 'GLASS PAVILION' },
    ],
    features: ['Retractable glass roof', 'Natural daylight throughout', 'Private garden courtyard', 'Dedicated catering kitchen', 'Integrated sound system'],
  },
  {
    tag: 'LAKESIDE SERENITY',
    name: 'The Lakeside Terrace',
    img: '/assets/lake.webp',
    desc: 'An open terrace perched at the edge of our private lake, offering panoramic water views and stunning sunset vistas. An unforgettable backdrop for any celebration.',
    meta: [
      { icon: <FaUsers />, text: 'UP TO 250 GUESTS' },
      { icon: <FaWater />, text: 'LAKESIDE' },
      { icon: <FaSun />, text: 'SUNSET VIEWS' },
    ],
    features: ['Direct lakeside access', 'Sunset-facing orientation', 'Floating floral arrangements', 'Private jetty for arrivals', 'Ambient waterfront lighting'],
  },
  {
    tag: 'COASTAL ELEGANCE',
    name: 'The Oceanfront Pavilion',
    img: '/assets/ocean.webp',
    desc: 'A breathtaking seaside venue where endless ocean horizons meet refined luxury. Featuring flowing ivory canopies, tropical landscaping, and the soothing rhythm of the waves.',
    meta: [
      { icon: <FaUsers />, text: 'UP TO 600 GUESTS' },
      { icon: <FaWater />, text: 'OCEANFRONT VENUE' },
      { icon: <FaUmbrellaBeach />, text: 'PRIVATE BEACH ACCESS' },
    ],
    features: ['Panoramic ocean sunset views', 'Private beachfront ceremony deck', 'Luxury coastal lounge seating', 'Palm-lined arrival pathway', 'Ambient lantern & wave lighting'],
  },
  {
    tag: 'SKYLINE LUXURY',
    name: 'The Celestial Rooftop',
    img: '/assets/roof.webp',
    desc: 'A breathtaking rooftop venue elevated above the estate with panoramic skyline views, modern glass architecture, and sophisticated evening ambience for elite receptions.',
    meta: [
      { icon: <FaUsers />, text: 'UP TO 300 GUESTS' },
      { icon: <FaCity />, text: 'ROOFTOP VENUE' },
      { icon: <FaMoon />, text: 'NIGHT SKY VIEWS' },
    ],
    features: ['Infinity-edge rooftop design', 'Skyline cocktail lounge', 'Premium LED mood lighting', 'Private VIP seating zones', 'Live music & DJ console setup'],
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