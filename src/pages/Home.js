import { Link } from 'react-router-dom';
import '../styles/Home.css';
import HeroSection from '../components/Herosection';
import { useNavigate } from 'react-router-dom';
import ServicesSection from '../components/Servicessection';
import { GiBigDiamondRing, GiFlowerPot, GiPartyPopper } from 'react-icons/gi';
import { MdCorporateFare } from 'react-icons/md';
import TestimonialSection from '../components/Testimonialsection';
import { useEffect, useRef, useState } from "react";
import PhotoStrip from '../components/StripSection';
// import VideoSection from '../components/Videosection';

const COLLAGE_ITEMS = [
  {
    img: '/ass/2.jpeg',
    alt: 'wedding reception',
    icon: <GiBigDiamondRing />,
    label: 'WEDDING RECEPTION',
    sub: 'Grand celebrations, timeless elegance',
  },
  {
    img: '/ass/30.jpg',
    alt: 'intimate wedding',
    icon: <GiFlowerPot />,
    label: 'INTIMATE WEDDINGS',
    sub: 'Close hearts, cherished moments',
  },
  {
    img: '/ass/26.jpg',
    alt: 'family milestones',
    icon: <GiPartyPopper />,
    label: 'BIRTHDAYS & MILESTONES',
    sub: 'Every milestone, beautifully marked',
  },
  {
    img: '/assets/col3.jpg',
    alt: 'corporate events',
    icon: <MdCorporateFare />,
    label: 'CORPORATE & SEMINARS',
    sub: 'Professional. Polished. Purposeful.',
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
  }, []);
}

function Home() {
  const navigate = useNavigate();
  useScrollAnimate();

  return (
    <div className="home-page hero-page">

      {/* HERO bg image */}
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
            <img src="/ass/23.jpeg" alt="Garden Wedding" />
          </div>
          <div className="oval-float">
            <img src="/assets/col6.jpg" alt="Ceremony" />
          </div>
          <div className="oval-badge">
            <span className="num">40+</span>
            <span className="txt">YEARS<br />EXCELLENCE</span>
          </div>
        </div>

        <div className="intro-text-col">
          <p className="section-label sa-fade-up">OUR STORY</p>

          <h2 className="section-title">
            <span className="sa-word">Where Four Decades of&nbsp;</span>
            <em className="sa-word sa-d1">Hospitality</em>
            <span className="sa-word sa-d2">&nbsp;Meet Every Detail</span>
          </h2>

          <div className="gold-divider sa-fade-up sa-d2"><span>✦</span></div>

          <p className="section-body sa-fade-up sa-d3">
            With over four decades of deep-rooted experience in the wedding and catering industry,
            our founders understand exactly what it takes to pull off a flawless event. Darsana Events
            isn't just a venue — it is the culmination of 40 years of hospitality expertise, designed
            from the ground up to handle the grandest Indian weddings down to the finest logistical details.
          </p>
          <p className="section-body sa-fade-up sa-d4" style={{ marginTop: '15px' }}>
            From lavish wedding receptions and intimate ceremonies to milestone celebrations and corporate
            gatherings, every event at Darsana Events is handled with the care and precision that only
            four generations of experience can bring.
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

      {/* FEATURED */}
      <section className="featured-section">
        <div className="featured-text-col">
          <p className="section-label sa-fade-up">THE DARSANA EVENTS PROMISE</p>

          <h2 className="section-title">
            <span className="sa-word">Every Space,&nbsp;</span>
            <em className="sa-word sa-d1">Every</em>
            <span className="sa-word sa-d2">&nbsp;Detail</span>
          </h2>

          <div className="gold-divider sa-fade-up sa-d2"><span>✦</span></div>

          <p className="section-body sa-fade-up sa-d3">
            Darsana Events offers a thoughtfully curated collection of spaces to suit every kind of
            celebration — from open-air grandeur to air-conditioned elegance — all backed by 40 years
            of hospitality expertise and a team that lives and breathes flawless events.
          </p>

          <ul className="feat-list sa-fade-up sa-d4">
            <li>Open lawn for grand outdoor receptions and ceremonies</li>
            <li>Intimate air-conditioned mini hall for smaller, elegant gatherings</li>
            <li>Two semi-covered halls for flexible indoor-outdoor celebrations</li>
            <li>Four 2BHK service apartments for family and bridal party stays</li>
            <li>Four distinct event categories — weddings, milestones, birthdays &amp; corporate</li>
            <li>End-to-end event coordination rooted in four decades of experience</li>
          </ul>

          <Link to="/services" className="btn-gold sa-fade-up sa-d5">EXPLORE SERVICES</Link>
        </div>

        <div className="feat-images sa-fade-right">
          <div className="feat-img-top">
            <img src="/ass/1a.png" alt="Venue" />
          </div>
          <div className="feat-img-bl">
            <img src="/ass/35.jpg" alt="Flowers" />
          </div>
          <div className="feat-img-br">
            <img src="/ass/27.jpg" alt="Couple" />
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
            <img src="/ass/2.jpeg" alt="Wedding" />
          </div>
          <div className="gallery-cell sa-fade-up sa-d2">
            <img src="/ass/13.jpeg" alt="Ceremony" />
          </div>
          <div className="gallery-cell sa-fade-up sa-d3">
            <img src="/ass/11.jpeg" alt="Flowers" />
          </div>
          <div className="gallery-cell sa-fade-up sa-d4">
            <img src="/ass/30.jpeg" alt="Table" />
          </div>
          <div className="gallery-cell sa-fade-up sa-d5">
            <img src="/ass/32.jpg" alt="Couple" />
          </div>
        </div>

        <Link to="/gallery" className="btn-outline sa-fade-up sa-d6">VIEW FULL GALLERY</Link>

      </section>

      {/* VIDEO SECTION */}

     <PhotoStrip />



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