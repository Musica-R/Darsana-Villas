import React, { useEffect } from 'react';
import '../styles/Gallery.css';
import PhotoStrip from '../components/StripSection';

const galleryImages = [
  { src: '/ass/D26.png', alt: 'Wedding Ceremony' },
  { src: '/ass/D22.png', alt: 'Ceremony' },
  { src: '/ass/28.jpg', alt: 'Flowers' },
  { src: '/ass/2.jpeg', alt: 'Table setting' },
  { src: '/ass/26.jpg', alt: 'Couple' },
  { src: '/ass/D23.png', alt: 'Reception' },
  { src: '/ass/D27.png', alt: 'Aisle' },
  { src: '/ass/32.jpg', alt: 'Ballroom' },
  { src: '/ass/27.jpg', alt: 'Garden' },
  { src: '/ass/8.jpeg', alt: 'Dining' },
  { src: '/ass/24.jpg', alt: 'Reception hall' },
];

function Gallery() {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  return (
    <div className="gallery-page">

      {/* Hero */}
      <section className="page-hero">
        <p className="section-label">OUR PORTFOLIO</p>
        <h1 className="section-title">A Glimpse of <em>Moments</em></h1>
        <p>Every image tells the story of a day crafted with love and precision. Browse our gallery to envision your own celebration at Darsana Events.</p>
      </section>

      {/* Curved Film Strip */}
      <PhotoStrip />

      {/* Videos */}
      {/* <section className="gallery-videos">
        <p className="section-label">IN MOTION</p>
        <h2 className="gallery-videos__heading">Relive the <em>Day</em></h2>
        <p className="gallery-videos__sub">
          Some moments are too alive for a single frame. Watch how Darsana Events brings celebrations to life.
        </p>
        <div className="gallery-videos__grid">
          {[
            { src: '/ass/video1.mp4', poster: '/ass/29.jpeg', caption: 'Wedding Highlights' },
            { src: '/ass/video2.mp4', poster: '/ass/22.png', caption: 'Reception Moments' },
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
      </section> */}

      {/* Gallery Title */}
      <section className="gallery-title-section">
        <p className="section-label">THE COLLECTION</p>
        <h2 className="section-title">Every <em>Frame</em>, A Memory</h2>
      </section>

      {/* Masonry */}
      <div className="gallery-masonry">
        {galleryImages.map((img, i) => (
          <div className="gallery-item" key={i}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Gallery;