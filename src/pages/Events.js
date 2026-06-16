import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Events.css';
import DarsanaAboutHero from '../components/Darsanahero';

const events = [
  {
    number: '01 / WEDDING RECEPTION',
    title: 'WEDDING RECEPTION',
    img: '/assets/wedding.webp',
    desc: 'Grand celebrations for the newlyweds. Toast to a lifetime of love in our beautifully decorated spaces — where every detail is crafted to make your reception an unforgettable evening.',
  },
  {
    number: '02 / INTIMATE WEDDINGS',
    title: 'INTIMATE WEDDINGS',
    img: '/assets/recp.webp',
    desc: 'Heartfelt ceremonies for close family and friends. Exchange your vows in an intimate, elegantly arranged setting that feels personal, warm, and truly your own.',
  },
  {
    number: '03 / BIRTHDAYS & MILESTONES',
    title: 'BIRTHDAYS & MILESTONES',
    img: '/assets/birthday.webp',
    desc: "Celebrate life's most cherished moments. From milestone birthdays to anniversary gatherings, we create joyful occasions tailored to your vision and your story.",
  },
  {
    number: '04 / CORPORATE EVENTS & SEMINARS',
    title: 'CORPORATE EVENTS & SEMINARS',
    img: '/assets/cor.jpg',
    desc: 'Professional spaces for business excellence. Host meetings, seminars, and company celebrations in sophisticated venues designed for productivity, networking, and lasting impressions.',
  },
];

/* ── Individual event card with staggered children ── */
function EventCard({ event }) {
  const cardRef = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const children = card.querySelectorAll('.ec-anim');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          children.forEach((el, i) => {
            setTimeout(() => {
              el.classList.add('ec-anim-in');
            }, i * 220);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="event-card" ref={cardRef}>

      <div className="event-card-img ec-anim ec-anim-scale">
        <img src={event.img} alt={event.title} />
        <div className="event-card-overlay">
          <span className="event-card-num">{event.number}</span>
        </div>
      </div>

      <div className="event-card-body">
        <h3 className="event-card-title ec-anim">{event.title}</h3>
        <div className="event-card-bar ec-anim" />
        <p className="event-card-desc ec-anim">{event.desc}</p>
        <Link to="/contact" className="event-card-cta ec-anim">ENQUIRE NOW →</Link>
      </div>

    </div>
  );
}

/* ── Section heading scroll animation ── */
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

function Events() {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  useScrollAnimate();

  return (
    <div className="events-page">

      <DarsanaAboutHero
        currentPage="EVENTS"
        label="OUR EVENTS"
        title={`Every Memorable <em>Occasion</em>`}
        body={`From intimate pre-wedding rituals to grand corporate galas — we craft each moment with elegance and intention.`}
        showStats={true}
        image="/assets/ocean.webp"
      />

      <section className="events-grid-section">

        <div className="text-center">
          <p className="section-label sa-fade-up">WHAT WE HOST</p>
          <h2 className="section-title">
            <span className="sa-word">Celebrate Every&nbsp;</span>
            <em className="sa-word sa-d1">Chapter</em>
          </h2>
          <div className="gold-divider sa-fade-up sa-d2"><span>✦</span></div>
          <p className="section-body events-center-text sa-fade-up sa-d3">
            From sacred traditions to milestone moments, Brookside Garden is the perfect
            canvas for every celebration life brings.
          </p>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>

      </section>

      <section className="events-cta-band">
        <h2 className="section-title">
          <span className="sa-word">Ready to Plan Your&nbsp;</span>
          <em className="sa-word sa-d1">Perfect</em>
          <span className="sa-word sa-d2">&nbsp;Event?</span>
        </h2>
        <p className="sa-fade-up sa-d3">
          Our dedicated team is here to bring your vision to life. Every occasion, crafted with care.
        </p>
        <Link to="/contact" className="btn-gold sa-fade-up sa-d4">START PLANNING</Link>
      </section>

    </div>
  );
}

export default Events;