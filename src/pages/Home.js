import { Link } from 'react-router-dom';
import '../styles/Home.css';
import HeroSection from '../components/Herosection';
import { useNavigate } from 'react-router-dom';
import ServicesSection from '../components/Servicessection';
import { GiBigDiamondRing, GiFlowerPot, GiPartyPopper, GiMusicalNotes } from 'react-icons/gi';
import { MdCorporateFare } from 'react-icons/md';
import TestimonialSection from '../components/Testimonialsection';
import { useEffect, useRef, useState } from "react";
// import VideoSection from '../components/Videosection';

const COLLAGE_ITEMS = [
  {
    img: '/assets/col1.jpg',
    alt: 'wedding',
    icon: <GiBigDiamondRing />,
    label: 'WEDDINGS',
    sub: 'Where love stories begin',
  },
  {
    img: '/assets/col3.jpg',
    alt: 'corporate',
    icon: <MdCorporateFare />,
    label: 'CORPORATE EVENTS',
    sub: 'Professional. Polished. Perfect.',
  },
  {
    img: '/assets/col2.jpg',
    alt: 'social',
    icon: <GiPartyPopper />,
    label: 'SOCIAL CELEBRATIONS',
    sub: 'Moments with your loved ones',
  },
  {
    img: '/assets/col4.webp',
    alt: 'entertainment',
    icon: <GiMusicalNotes />,
    label: 'LIVE ENTERTAINMENT',
    sub: 'Music. Energy. Experience.',
  },
  {
    img: '/assets/col5.webp',
    alt: 'picture',
    icon: <GiFlowerPot />,
    label: 'PICTURE PERFECT',
    sub: 'Every frame, timeless',
  },
];

/* ── Animated Counter ── */
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
          // Slower, more graceful count — 8 seconds with a gentle ease-out
          const duration = 8000;
          const start = performance.now();
          // Softer ease: ease-out cubic feels more elegant than quartic
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
      // Lower threshold so elements begin their gentle reveal earlier
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    allElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

function Home() {
  const navigate = useNavigate();
  useScrollAnimate();

  return (
    <div className="home-page hero-page">

      {/* HERO */}
      <HeroSection
        backgroundImage="/assets/back.webp"
        tagline="ELEGANCE • MEMORIES • CELEBRATIONS"
        description={"Extraordinary celebrations in\nbreathstopping settings"}
        primaryLabel="BEGIN YOUR JOURNEY"
        secondaryLabel="EXPLORE VENUES"
        onPrimary={() => navigate('/contact')}
        onSecondary={() => navigate('/venues')}
      />

      {/* COLLAGE STRIP */}
      <section>
        <div className="collage-header">
          <span className="sa-fade-up">Crafting Moments That Last a Lifetime</span>
          <div className="collage-header-divider sa-fade-up sa-d1">✦</div>
        </div>

        <div className="collage-strip">
          {COLLAGE_ITEMS.map((item, i) => (

            <div
              key={item.label}
              className={`collage-cell sa-fade-up sa-d${i + 1}`}
            >
              <a href="/event" style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}>
                <img src={item.img} alt={item.alt} />
                <div className="collage-overlay" />
                <div className="collage-label">
                  <div className="collage-icon-ring">{item.icon}</div>
                  <p className="collage-title">{item.label}</p>
                  <p className="collage-sub">{item.sub}</p>

                </div>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-section" id="main-content">

        <div className="oval-wrap sa-fade-left">
          <div className="arch-main">
            <img src="/assets/Aboutus.jpg" alt="Garden Wedding" />
          </div>
          <div className="oval-float">
            <img src="/assets/col6.jpg" alt="Ceremony" />
          </div>
          <div className="oval-badge">
            <span className="num">15+</span>
            <span className="txt">YEARS<br />EXCELLENCE</span>
          </div>
        </div>

        <div className="intro-text-col">
          <p className="section-label sa-fade-up">OUR STORY</p>

          <h2 className="section-title">
            <span className="sa-word">A Place Where&nbsp;</span>
            <em className="sa-word sa-d1">Moments</em>
            <span className="sa-word sa-d2">&nbsp;Become Memories</span>
          </h2>

          <div className="gold-divider sa-fade-up sa-d2"><span>✦</span></div>

          <p className="section-body sa-fade-up sa-d3">
            Nestled in the heart of Bangalore, Darsana Events is more than a venue — it's a sanctuary
            where your most cherished celebrations come to life. Our lush gardens, grand ballrooms,
            and dedicated team of event specialists ensure every detail is handled with the utmost
            care and elegance.
          </p>
          <p className="section-body sa-fade-up sa-d4" style={{ marginTop: '15px' }}>
            From intimate weddings to grand gala events, we transform your vision into an unforgettable
            experience treasured for a lifetime.
          </p>
          <Link
            to="/about"
            className="btn-gold sa-fade-up sa-d5"
            style={{ marginTop: '34px', display: 'inline-block' }}
          >
            DISCOVER OUR STORY
          </Link>
        </div>

      </section>

      {/* SERVICES SECTION */}
      <ServicesSection />

      {/* STATS */}
      <div className="stats-row">
        <div className="stat-item sa-fade-up sa-d1">
          <div className="stat-num"><AnimatedCounter target={2400} suffix="+" delay={0} /></div>
          <div className="stat-label">EVENTS HOSTED</div>
        </div>
        <div className="stat-item sa-fade-up sa-d2">
          <div className="stat-num"><AnimatedCounter target={50} delay={200} /></div>
          <div className="stat-label">ACRES OF GARDENS</div>
        </div>
        <div className="stat-item sa-fade-up sa-d3">
          <div className="stat-num"><AnimatedCounter target={15} delay={400} /></div>
          <div className="stat-label">YEARS OF EXCELLENCE</div>
        </div>
        <div className="stat-item sa-fade-up sa-d4">
          <div className="stat-num"><AnimatedCounter target={98} suffix="%" delay={600} /></div>
          <div className="stat-label">CLIENT SATISFACTION</div>
        </div>
      </div>

      {/* FEATURED */}
      <section className="featured-section">
        <div className="featured-text-col"> 
          <p className="section-label sa-fade-up">THE DARSANA EVENTS PROMISE</p>

          <h2 className="section-title">
            <span className="sa-word">Luxury in&nbsp;</span>
            <em className="sa-word sa-d1">Every</em>
            <span className="sa-word sa-d2">&nbsp;Detail</span>
          </h2>

          <div className="gold-divider sa-fade-up sa-d2"><span>✦</span></div>

          <p className="section-body sa-fade-up sa-d3">
            We believe extraordinary events are born from meticulous attention to every single detail.
            Our team of experienced designers, florists, and coordinators work tirelessly to ensure
            your day surpasses every expectation.
          </p>

          <ul className="feat-list sa-fade-up sa-d4">
            <li>Over 50 acres of lush, manicured garden landscapes</li>
            <li>Multiple event spaces accommodating 50 to 2,000 guests</li>
            <li>In-house catering with award-winning culinary team</li>
            <li>Dedicated event coordinator for every celebration</li>
            <li>Luxury bridal suite and groom's lounge facilities</li>
            <li>State-of-the-art lighting, sound &amp; AV systems</li>
          </ul>

          <Link to="/services" className="btn-gold sa-fade-up sa-d5">EXPLORE SERVICES</Link>
        </div>

        <div className="feat-images sa-fade-right">
          <div className="feat-img-top">
            <img src="/assets/ass.webp" alt="Venue" />
          </div>
          <div className="feat-img-bl">
            <img src="/assets/people.jpg" alt="Flowers" />
          </div>
          <div className="feat-img-br">
            <img src="/assets/people1.jpg" alt="Couple" />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <TestimonialSection />

      {/* GALLERY PREVIEW */}
      <section className="gallery-preview">
        <p className="section-label sa-fade-up">A GLIMPSE INSIDE</p>

        <h2 className="section-title">
          <span className="sa-word">Our&nbsp;</span>
          <em className="sa-word sa-d1">Gallery</em>
        </h2>

        <div className="gallery-grid">
          <div className="gallery-cell sa-fade-up sa-d1">
            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80" alt="Wedding" />
          </div>
          <div className="gallery-cell sa-fade-up sa-d2">
            <img src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80" alt="Ceremony" />
          </div>
          <div className="gallery-cell sa-fade-up sa-d3">
            <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80" alt="Flowers" />
          </div>
          <div className="gallery-cell sa-fade-up sa-d4">
            <img src="https://images.unsplash.com/photo-1525772764200-be829a350797?w=600&q=80" alt="Table" />
          </div>
          <div className="gallery-cell sa-fade-up sa-d5">
            <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80" alt="Couple" />
          </div>
        </div>

        <Link to="/gallery" className="btn-outline sa-fade-up sa-d6">VIEW FULL GALLERY</Link>
      </section>

      {/* WOW SECTION */}
      <section className="wow-section-wrapper">
        <div className="wow-section">

          {/* Left: Image side */}
          <div className="wow-images sa-fade-left">
            <img className="wow-img-bg" src="/assets/wow1.webp" alt="Table setting" />
            <div className="wow-overlay" />
            <div className="wow-circle">
              <img src="/assets/wow3.jpg" alt="Decor" />
            </div>
            <div className="wow-floater wow-floater-1">
              <span>Est. 2014</span>
            </div>
            <div className="wow-floater wow-floater-2">
              <span>200+ Weddings</span>
            </div>
          </div>

          {/* Right: Text side */}
          <div className="wow-text">
            <div className="wow-text-inner">
              <p className="wow-label sa-fade-up">
                <span className="wow-label-line" />
                WE MAKE IT EASY FOR YOU
              </p>

              <h2 className="wow-title">
                <span className="sa-word">You're the&nbsp;</span>
                <em className="sa-word sa-d1">Couple</em>
                <br />
                <span className="sa-word sa-d2">Who Wants to</span>
                <br />
                <em className="sa-word sa-d3 wow-em-gold">Wow</em>
                <span className="sa-word sa-d3">&nbsp;Your Guests</span>
              </h2>

              <p className="wow-body sa-fade-up sa-d4">
                And create a day nothing less than unforgettable. We are the Darsana Events team
                to help you do exactly that.
              </p>

              <div className="wow-btns">
                <Link to="/services" className="wow-btn wow-btn-primary sa-fade-up sa-d4">
                  <span>FULL SERVICE PLANNING</span>
                  <i className="wow-btn-arrow">→</i>
                </Link>
                <Link to="/services" className="wow-btn wow-btn-mid sa-fade-up sa-d5">
                  <span>PARTIAL PLANNING</span>
                  <i className="wow-btn-arrow">→</i>
                </Link>
                <Link to="/services" className="wow-btn wow-btn-ghost sa-fade-up sa-d6">
                  <span>DAY-OF COORDINATION</span>
                  <i className="wow-btn-arrow">→</i>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* <VideoSection /> */}

    </div>
  );
}

export default Home;