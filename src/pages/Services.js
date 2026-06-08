import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';
import DarsanaAboutHero from '../components/Darsanahero';

const services = [
  {
    img: '/assets/w1.jpg',
    label: 'COMPREHENSIVE PLANNING',
    title: 'Full Service Wedding Planning',
    desc: 'From your first visit to the final farewell, our full-service planning team manages every detail. Venue styling, vendor coordination, catering, décor, and day-of execution — all handled with grace.',
    features: ['Dedicated lead coordinator & assistant', 'Complete vendor sourcing & management', 'Budget planning & tracking', 'Custom floor plan & timeline creation', 'Day-of coordination for 12+ hours'],
    reverse: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
    label: 'BESPOKE FLORALS',
    title: 'Floral Design & Styling',
    desc: 'Our in-house floral atelier creates breathtaking arrangements — from intimate table centrepieces to grand ceremony arches and sweeping petal aisles. Every bloom curated for your palette.',
    features: ['Custom bridal bouquet & party florals', 'Ceremony arch & altar installations', 'Table centrepieces & runner designs', 'Hanging & suspended floral displays', 'Fresh daily delivery from partner farms'],
    reverse: true,
  },
  {
    img: '/assets/cat.jpg',
    label: 'AWARD-WINNING CUISINE',
    title: 'Fine Dining & Catering',
    desc: 'Our award-winning culinary team crafts bespoke menus celebrating both Indian heritage and international cuisine. From traditional multi-course thalis to contemporary fusion — every dish is an experience.',
    features: ['Bespoke menu design & tasting sessions', 'Indian, Continental & fusion cuisine', 'Live food stations & action counters', 'Full bar service & sommelier consultation', 'Dietary & allergy-specific menus'],
    reverse: false,
  },
  {
    img: '/assets/light.jpg',
    label: 'ATMOSPHERIC LIGHTING',
    title: 'Lighting & Ambience',
    desc: 'Transform every celebration into an unforgettable visual experience with our bespoke lighting artistry. From crystal chandeliers and candlelit pathways to intelligent mood lighting and immersive stage illumination, every detail is designed to elevate the atmosphere with elegance and drama.',
    features: [
      'Luxury chandelier & pendant lighting',
      'Ambient mood & architectural illumination',
      'Stage spotlight & DMX lighting systems',
      'Fairy lights & outdoor canopy installations',
      'Custom colour themes & visual effects',
    ],
    reverse: true,
  },
  {
    img: '/assets/dj1.jpg',
    label: 'CURATED ENTERTAINMENT',
    title: 'Music, DJ & Live Performances',
    desc: 'From sophisticated live ensembles to high-energy celebrity DJs, our entertainment experiences are curated to match the spirit of your celebration. Every performance is seamlessly coordinated to create unforgettable moments on and off the dance floor.',
    features: [
      'Professional DJ & premium sound setup',
      'Live bands, classical & fusion performers',
      'Traditional wedding music ensembles',
      'Dance floor, stage & special effects setup',
      'Personalised playlists & event coordination',
    ],
    reverse: false,
  },
  {
    img: '/assets/photos.jpg',
    label: 'TIMELESS STORYTELLING',
    title: 'Photography & Wedding Cinematics',
    desc: 'Our creative photography and cinematography team captures every emotion, detail, and celebration with an editorial luxury aesthetic. From intimate candid moments to cinematic wedding films, your story is preserved beautifully for generations.',
    features: [
      'Luxury candid & traditional photography',
      'Cinematic wedding film production',
      'Drone & aerial venue coverage',
      'Bridal portraits & couple sessions',
      'Same-day teaser edits & highlight reels',
    ],
    reverse: true,
  },
];

function useScrollAnimate() {
  useEffect(() => {
    const rows = document.querySelectorAll('.svc-row');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sa-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    rows.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Services() {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  useScrollAnimate();

  return (
    <div className="services-page">
      <DarsanaAboutHero
        currentPage="SERVICES"
        label="WHAT WE OFFER"
       title={`Every Celebration Detail,<br /><em>Beautifully Perfected</em>`}
        body={`From full wedding planning to bespoke florals and fine dining, our in-house team handles every element of your celebration.`}
        showStats={true}
        image="/assets/roof.webp"
      />

      {services.map((s, i) => (
        <div className={`svc-row${s.reverse ? ' svc-row-reverse' : ''}`} key={i}>
          {s.reverse ? (
            <>
              <div>
                <p className="section-label">{s.label}</p>
                <h2 className="section-title">{s.title}</h2>
                <div className="gold-divider"><span>✦</span></div>
                <p className="section-body">{s.desc}</p>
                <ul className="feat-list" style={{ marginTop: '24px' }}>
                  {s.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <Link to="/contact" className="btn-gold" style={{ marginTop: '30px', display: 'inline-block' }}>ENQUIRE NOW</Link>
              </div>
              <div className="svc-square"><img src={s.img} alt={s.title} /></div>
            </>
          ) : (
            <>
              <div className="svc-square"><img src={s.img} alt={s.title} /></div>
              <div>
                <p className="section-label">{s.label}</p>
                <h2 className="section-title">{s.title}</h2>
                <div className="gold-divider"><span>✦</span></div>
                <p className="section-body">{s.desc}</p>
                <ul className="feat-list" style={{ marginTop: '24px' }}>
                  {s.features.map((f, j) => <li key={j}>{f}</li>)}
                </ul>
                <Link to="/contact" className="btn-gold" style={{ marginTop: '30px', display: 'inline-block' }}>ENQUIRE NOW</Link>
              </div>
            </>
          )}
        </div>
      ))}

      <section className="cta-banner">
        <h2 className="section-title">Not Sure Which <em>Package</em> Is Right?</h2>
        <p>Our team is here to guide you through every option and help you find the perfect fit.</p>
        <Link to="/contact" className="btn-gold">LET'S TALK</Link>
      </section>
    </div>
  );
}

export default Services;