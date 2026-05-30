import React, { useState, useEffect } from 'react';
import '../styles/Gallery.css';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80', cat: 'weddings', alt: 'Wedding Ceremony' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', cat: 'ceremonies', alt: 'Ceremony' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80', cat: 'florals', alt: 'Flowers' },
  { src: 'https://images.unsplash.com/photo-1525772764200-be829a350797?w=800&q=80', cat: 'dining', alt: 'Table setting' },
  { src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80', cat: 'weddings', alt: 'Couple' },
  { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80', cat: 'receptions', alt: 'Reception' },
  { src: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80', cat: 'ceremonies', alt: 'Aisle' },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80', cat: 'florals', alt: 'Bouquet' },
  { src: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80', cat: 'venues', alt: 'Ballroom' },
  { src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80', cat: 'venues', alt: 'Garden' },
  { src: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80', cat: 'dining', alt: 'Dining' },
  { src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80', cat: 'receptions', alt: 'Reception hall' },
];

const filters = ['all', 'weddings', 'ceremonies', 'receptions', 'florals', 'dining', 'venues'];

function Gallery() {
  const [active, setActive] = useState('all');
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  const visible = active === 'all' ? galleryImages : galleryImages.filter(g => g.cat === active);

  return (
    <div className="gallery-page">
      <section className="page-hero">
        <p className="section-label">OUR PORTFOLIO</p>
        <h1 className="section-title">A Glimpse of <em>Moments</em></h1>
        <p>Every image tells the story of a day crafted with love and precision. Browse our gallery to envision your own celebration at Darsana Events.</p>
      </section>

      <div className="gallery-filter">
        {filters.map(f => (
          <button key={f} className={`filter-btn${active === f ? ' active' : ''}`} onClick={() => setActive(f)}>
            {f.toUpperCase()}
          </button>
        ))}
      </div>

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
