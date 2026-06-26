import { useEffect, useRef } from "react";
import "../styles/HeroSection.css";

// ─── Sub-components ──────────────────────────────────────────────────────────

const Particles = () =>
  Array.from({ length: 10 }, (_, i) => (
    <span key={i} className={`particle p${i + 1}`} aria-hidden="true" />
  ));

const ScrollworkOrnament = () => (

  <svg
    className="ornament-top"
    viewBox="0 0 150 22"
    width="150"
    height="22"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line x1="0" y1="11" x2="42" y2="11" stroke="#ffd258" strokeWidth="0.85" />
    <circle cx="47" cy="11" r="1.7" fill="#ffd560" />
    {/* left S-scroll */}
    <path
      d="M53 11 C55 7,59 6,61 9 C63 12,61 16,58 15 C55 14,55 10,58 9"
      fill="none"
      stroke="#ffd258"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* center diamond */}
    <path d="M71 11 L75 7 L79 11 L75 15 Z" fill="#ffd258" />
    {/* right S-scroll (mirror) */}
    <path
      d="M92 9 C95 10,95 14,92 15 C89 16,87 12,89 9 C91 6,95 7,97 11"
      fill="none"
      stroke="#ffd258"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="103" cy="11" r="1.7" fill="#ffd560" />
    <line x1="108" y1="11" x2="150" y2="11" stroke="#ffd258" strokeWidth="0.85" />
  </svg>
);

const LeafSprigLeft = () => (
  <svg
    className="leaf-svg"
    viewBox="0 0 52 30"
    width="52"
    height="30"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line x1="50" y1="15" x2="22" y2="15" stroke="#ffd258" strokeWidth="1" />
    <path d="M30 15 C26 11, 16 8, 10 10 C14 7, 26 8, 30 15 Z" fill="#ffd258" opacity=".95" />
    <line x1="30" y1="15" x2="10" y2="10" stroke="rgba(255, 199, 69, 0.5)" strokeWidth="0.6" />
    <path d="M30 15 C26 19, 16 22, 10 20 C14 23, 26 22, 30 15 Z" fill="#ffd258" opacity=".95" />
    <line x1="30" y1="15" x2="10" y2="20" stroke="rgba(255, 197, 61, 0.5)" strokeWidth="0.6" />
    <circle cx="8" cy="15" r="1.5" fill="#ffd258" />
  </svg>
);

const LeafSprigRight = () => (
  <svg
    className="leaf-svg"
    viewBox="0 0 52 30"
    width="52"
    height="30"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <line x1="2" y1="15" x2="30" y2="15" stroke="#ffd258" strokeWidth="1" />
    <path d="M22 15 C26 11, 36 8, 42 10 C38 7, 26 8, 22 15 Z" fill="#ffd258" opacity=".95" />
    <line x1="22" y1="15" x2="42" y2="10" stroke="rgba(255, 198, 66, 0.5)" strokeWidth="0.6" />
    <path d="M22 15 C26 19, 36 22, 42 20 C38 23, 26 22, 22 15 Z" fill="#ffd258" opacity=".95" />
    <line x1="22" y1="15" x2="42" y2="20" stroke="rgba(255, 197, 62, 0.5)" strokeWidth="0.6" />
    <circle cx="44" cy="15" r="1.5" fill="#ffd258" />
  </svg>
);

// ─── Main Component ───────────────────────────────────────────────────────────

const HeroSection = ({
  tagline = "ELEGANCE \u2022 MEMORIES \u2022 CELEBRATIONS",
  description = "Extraordinary celebrations in breathtaking settings",
  primaryLabel = "BEGIN YOUR JOURNEY",
  secondaryLabel = "EXPLORE VENUES",
  onPrimary,
  onSecondary,
  backgroundImage = "/assets/back.png"
}) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      heroRef.current?.classList.add("hero--loaded");
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="hero-section" ref={heroRef}>
      {/* Background */}
      <div
        className="hero__bg"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
        role="img"
        aria-label="Decorative background"
      />

      {/* Vignette overlay */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Sparkle particles */}
      <div className="hero__particles" aria-hidden="true">
        <Particles />
      </div>

      {/* Main content */}
      <div className="hero__content">

        {/* Tagline */}
        <div className="tagline">
          <span className="tagline-line" />
          <span className="tagline-text">{tagline}</span>
          <span className="tagline-line" />
        </div>

        {/* Top scrollwork ornament */}
        <ScrollworkOrnament />

        {/* Headline */}
        <div className="headline-block">
          <div className="row1">
            <span className="txt-where">Where</span>
            <span className="txt-love">Love</span>
          </div>
          <span className="txt-blooms">Blooms</span>
        </div>

        {/* Short divider */}
        <div className="divider-short" aria-hidden="true" />

        {/* Description with leaf ornaments */}
        <div className="desc-row">
          <LeafSprigLeft />
          <p className="hero-desc" dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, "<br/>") }} />
          <LeafSprigRight />
        </div>

        {/* CTAs */}
        <div className="ctas">
          <button className="btn btn-primary" onClick={onPrimary}>
            {primaryLabel}
          </button>
          <button className="btn btn-secondary" onClick={onSecondary}>
            {secondaryLabel}
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;