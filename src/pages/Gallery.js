import React, { useState, useEffect } from 'react';
import '../styles/Gallery.css';
import StripSection from '../components/StripSection';
import PhotoStrip from '../components/StripSection';

const galleryImages = [
  { src: '/ass/34.jpg', cat: 'weddings', alt: 'Wedding Ceremony' },
  { src: '/ass/22.png', cat: 'ceremonies', alt: 'Ceremony' },
  { src: '/ass/28.jpg', cat: 'florals', alt: 'Flowers' },
  { src: '/ass/2.jpeg', cat: 'dining', alt: 'Table setting' },
  { src: '/ass/26.jpg', cat: 'weddings', alt: 'Couple' },
  { src: '/ass/1a.png', cat: 'receptions', alt: 'Reception' },
  { src: '/ass/33.jpg', cat: 'ceremonies', alt: 'Aisle' },
  { src: '/ass/13.jpeg', cat: 'florals', alt: 'Bouquet' },
  { src: '/ass/32.jpg', cat: 'venues', alt: 'Ballroom' },
  { src: '/ass/27.jpg', cat: 'venues', alt: 'Garden' },
  { src: '/ass/8.jpeg', cat: 'dining', alt: 'Dining' },
  { src: '/ass/24.jpg', cat: 'receptions', alt: 'Reception hall' },
];

const filters = ['all', 'weddings', 'ceremonies', 'receptions', 'florals', 'dining', 'venues'];

function Gallery() {
  const [active, setActive] = useState('all');
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  const visible = active === 'all' ? galleryImages : galleryImages.filter(g => g.cat === active);

  return (
    <div className="gallery-page">

      {/* Hero */}
      <section className="page-hero">
        <p className="section-label">OUR PORTFOLIO</p>
        <h1 className="section-title">A Glimpse of <em>Moments</em></h1>
        <p>Every image tells the story of a day crafted with love and precision. Browse our gallery to envision your own celebration at Darsana Events.</p>
      </section>

      {/* Curved Film Strip */}
      {/* <StripSection /> */}
      <PhotoStrip />

      {/* Videos */}
      <section className="gallery-videos">
        <p className="section-label">IN MOTION</p>
        <h2 className="gallery-videos__heading">Relive the <em>Day</em></h2>
        <p className="gallery-videos__sub">
          Some moments are too alive for a single frame. Watch how Darsana Events brings celebrations to life.
        </p>
        <div className="gallery-videos__grid">
          {[
            { src: '/ass/video1.mp4', poster: '/ass/34.jpg', caption: 'Wedding Highlights — 2024' },
            { src: '/ass/video2.mp4', poster: '/ass/26.jpg', caption: 'Reception Moments — 2024' },
          ].map((v, i) => (
            <div className="gallery-video-card" key={i}>
              <div className="gallery-video-wrap">
                <video src={v.src} poster={v.poster} controls preload="none" />
                <div className="gallery-video-overlay" onClick={e => {
                  const vid = e.currentTarget.closest('.gallery-video-wrap').querySelector('video');
                  vid.play();
                  e.currentTarget.style.opacity = 0;
                  e.currentTarget.style.pointerEvents = 'none';
                }}>
                  <button className="gallery-play-btn" aria-label="Play video">
                    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="28" cy="28" r="27" stroke="currentColor" strokeWidth="1.5" />
                      <polygon points="22,16 44,28 22,40" fill="currentColor" />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="gallery-video-caption">{v.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filters */}
      <div className="gallery-filter">
        {filters.map(f => (
          <button
            key={f}
            className={`filter-btn${active === f ? ' active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Masonry */}
      <div className="gallery-masonry">
        {visible.map((img, i) => (
          <div className="gallery-item" key={i}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Gallery;