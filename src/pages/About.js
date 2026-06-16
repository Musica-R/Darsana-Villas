import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';
import DarsanaAboutHero from '../components/Darsanahero';

/* ── Animated Counter (same as Home) ── */
function AnimatedCounter({ target, suffix = "", delay = 0 }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 8000;
          const start = performance.now();
          const ease = (t) => 1 - Math.pow(1 - t, 3);
          setTimeout(() => {
            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1);
              setValue(Math.round(ease(progress) * target));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, delay]);

  return <span ref={ref}>{value.toLocaleString()}{suffix}</span>;
}

/* ── Scroll Animation Hook ── */
function useScrollAnimate() {
  useEffect(() => {
    const selectors = [
      '.sa-fade-up',
      '.sa-fade-left',
      '.sa-fade-right',
      '.sa-word',
      '.sa-scale',
    ];

    // Small delay so the page has scrolled to top before we attach observers
    const timer = setTimeout(() => {
      const allElements = document.querySelectorAll(selectors.join(','));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('sa-in');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
      );

      allElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, []);
}

function About() {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  useScrollAnimate();

  return (
    <div className="about-page">

      <DarsanaAboutHero
        currentPage="ABOUT"
        label="OUR STORY"
        title={`More Than a Venue &ndash;<br /><em>A Legacy</em>`}
        body={`For over 40 years, Darsana Events has been Palakkad's most beloved luxury event destination, where every celebration is treated as a work of art.`}
        showStats={true}
        image="/assets/white.webp"
      />

      {/* STORY SECTION */}
       {/* STORY SECTION */}
      <div className="about-story">
        <div className="oval-wrap-about sa-fade-left">
          <div className="oval-about-main">
            <img src="/assets/col6.jpg" alt="Darsana Events" />
          </div>
        </div>
        <div>
          <p className="section-label sa-fade-up">40 YEARS IN THE MAKING</p>
          <h2 className="section-title">
            <span className="sa-word">Where&nbsp;</span>
            <em className="sa-word sa-d1">Decades of Expertise</em>
            <span className="sa-word sa-d2">&nbsp;Meet Every Detail</span>
          </h2>
          <div className="gold-divider sa-fade-up sa-d2"><span>✦</span></div>
          <p className="section-body sa-fade-up sa-d3">
            With over four decades of deep-rooted experience in the wedding and catering industry,
            our founders understand exactly what it takes to pull off a flawless event. Darsana Events
            isn't just a venue — it is the culmination of 40 years of hospitality expertise, designed
            from the ground up to handle the grandest Indian weddings down to the finest logistical details.
          </p>
          <p className="section-body sa-fade-up sa-d4" style={{ marginTop: '16px' }}>
            Our spaces — an open lawn, an intimate air-conditioned hall, two semi-covered halls,
            and four 2BHK service apartments — are thoughtfully designed so that every guest, every
            family member, and every moment is cared for under one roof. When you choose Darsana Events,
            you're not just booking a venue. You're entrusting your celebration to people who have
            dedicated their lives to making events extraordinary.
          </p>
          <Link
            to="/contact"
            className="btn-gold sa-fade-up sa-d5"
            style={{ marginTop: '34px', display: 'inline-block' }}
          >
            BEGIN YOUR JOURNEY
          </Link>
        </div>
      </div>

     
      {/* STATS */}
      <div className="stats-row">
        <div className="stat-item sa-fade-up sa-d1">
          <div className="stat-num"><AnimatedCounter target={40} suffix="+" delay={0} /></div>
          <div className="stat-label">YEARS OF EXPERTISE</div>
        </div>
        <div className="stat-item sa-fade-up sa-d2">
          <div className="stat-num"><AnimatedCounter target={4} delay={200} /></div>
          <div className="stat-label">VERSATILE VENUES</div>
        </div>
        <div className="stat-item sa-fade-up sa-d3">
          <div className="stat-num"><AnimatedCounter target={4} delay={400} /></div>
          <div className="stat-label">SERVICE APARTMENTS</div>
        </div>
        <div className="stat-item sa-fade-up sa-d4">
          <div className="stat-num"><AnimatedCounter target={98} suffix="%" delay={600} /></div>
          <div className="stat-label">CLIENT SATISFACTION</div>
        </div>
      </div>
      
      {/* TEAM */}
      <section className="team-section">
        <p className="section-label sa-fade-up">THE PEOPLE BEHIND THE MAGIC</p>
        <h2 className="section-title">
          <span className="sa-word">Meet Our&nbsp;</span>
          <em className="sa-word sa-d1">Team</em>
        </h2>
        <div className="team-grid">
          {[
            { img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', name: 'Priya Sharma',  role: 'FOUNDER & CREATIVE DIRECTOR' },
            { img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80', name: 'Arjun Mehta',   role: 'HEAD OF EVENTS & OPERATIONS' },
            { img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', name: 'Sunita Rao',    role: 'FLORAL DESIGN DIRECTOR' },
          ].map((m, i) => (
            <div className={`team-card sa-fade-up sa-d${i + 1}`} key={i}>
              <div className="team-photo sa-scale">
                <img src={m.img} alt={m.name} />
              </div>
              <p className="team-name">{m.name}</p>
              <p className="team-role">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default About;