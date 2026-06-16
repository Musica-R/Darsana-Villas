import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';
import DarsanaAboutHero from '../components/Darsanahero';

const services = [
  {
    img: '/assets/wedding.webp',
    label: 'WEDDINGS & RECEPTIONS',
    title: 'Wedding Reception & Intimate Weddings',
    desc: 'From grand receptions to intimate ceremonies, Darsana Events is designed to host every style of wedding with elegance. With 40 years of hospitality expertise behind every detail, your celebration is in the most experienced hands.',
    features: [
      'Dedicated event coordination team',
      'Flexible venue setup for all wedding sizes',
      'Open Lawn, Mini AC Hall & Semi Covered Halls available',
      'Traditional & contemporary décor arrangements',
      'Seamless end-to-end event management',
    ],
    reverse: false,
  },
  {
    img: '/assets/birthday.webp',
    label: 'CELEBRATIONS & MILESTONES',
    title: 'Birthdays & Family Milestones',
    desc: 'Mark life\'s most cherished moments in a setting that feels truly special. Whether it\'s a milestone birthday, an anniversary, or a family gathering, our venues and team ensure every occasion is celebrated in warmth and style.',
    features: [
      'Customisable venue setup & theming',
      'Suitable for intimate and large gatherings',
      'Open Lawn & Semi Covered Hall options',
      'In-house catering & dining arrangements',
      'Personalised event planning support',
    ],
    reverse: true,
  },
  {
    img: '/assets/cor.jpg',
    label: 'PROFESSIONAL EVENTS',
    title: 'Corporate Events & Seminars',
    desc: 'Host your business meetings, seminars, and corporate celebrations in a refined and well-equipped environment. Our fully air-conditioned Mini AC Hall and spacious venues provide the perfect professional setting.',
    features: [
      'Mini AC Hall ideal for seminars & meetings',
      'AV & sound system support',
      'Catering & refreshment arrangements',
      'Ample parking for delegates & guests',
      'Dedicated on-site coordination',
    ],
    reverse: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80',
    label: 'STAY & COMFORT',
    title: '2BHK Service Apartments',
    desc: 'Extend your celebration with a comfortable stay right on the premises. Our 4 fully furnished 2BHK service apartments ensure your family and guests are well-rested, close, and ready for every moment of the festivities.',
    features: [
      '4 fully furnished 2BHK apartments',
      'Ideal for families & wedding parties',
      'Daily housekeeping & in-room dining',
      'Dedicated parking per apartment',
      'Quiet, peaceful setting within the estate',
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