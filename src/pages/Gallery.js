import React, { useState, useEffect } from 'react';
import '../styles/Gallery.css';

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
      <section className="page-hero">
        <p className="section-label">OUR PORTFOLIO</p>
        <h1 className="section-title">A Glimpse of <em>Moments</em></h1>
        <p>Every image tells the story of a day crafted with love and precision. Browse our gallery to envision your own celebration at Darsana Events.</p>
      </section>

      {/* <div className="gallery-filter">
        {filters.map(f => (
          <button key={f} className={`filter-btn${active === f ? ' active' : ''}`} onClick={() => setActive(f)}>
            {f.toUpperCase()}
          </button>
        ))}
      </div> */}

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
