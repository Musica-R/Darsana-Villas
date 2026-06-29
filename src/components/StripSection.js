import React, { useRef, useState, useEffect } from 'react';
import '../styles/Strip.css';

const CARDS = [
  { src: '/ass/33.jpeg', label: 'Ceremony'    },
  { src: '/ass/25.jpeg', label: 'Reception'   },
  { src: '/ass/37.jpeg', label: 'Details'     },
  { src: '/ass/31.jpeg', label: 'Portraits'   },
  { src: '/ass/29.jpg', label: 'Couple'      },
  { src: '/ass/39.jpeg', label: 'Golden Hour' },
  { src: '/ass/29.jpeg', label: 'Candid'      },
  { src: '/ass/20.jpeg', label: 'Dancing'     },
  { src: '/ass/27.jpeg', label: 'Florals'     },
  { src: '/ass/32.jpeg', label: 'Venue'       },
  { src: '/ass/28.jpeg', label: 'Toasts'      },
  { src: '/ass/36.jpg', label: 'Family'      },
];

const VISIBLE = 5;

export default function PhotoStrip() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);
  const maxIndex = CARDS.length - VISIBLE;

  const goTo = (index) => {
    const clamped = Math.max(0, Math.min(index, maxIndex));
    setCurrent(clamped);
  };

  useEffect(() => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector('.ps-card');
    if (!card) return;
    trackRef.current.scrollTo({
      left: current * (card.offsetWidth + 16),
      behavior: 'smooth',
    });
  }, [current]);

  const drag = useRef({ down: false, startX: 0, scrollLeft: 0 });
  const onMouseDown  = (e) => {
    drag.current = { down: true, startX: e.pageX - trackRef.current.offsetLeft, scrollLeft: trackRef.current.scrollLeft };
    trackRef.current.style.userSelect = 'none';
  };
  const onMouseUp    = () => { drag.current.down = false; };
  const onMouseLeave = () => { drag.current.down = false; };
  const onMouseMove  = (e) => {
    if (!drag.current.down) return;
    e.preventDefault();
    trackRef.current.scrollLeft =
      drag.current.scrollLeft - (e.pageX - trackRef.current.offsetLeft - drag.current.startX) * 1.1;
  };

  return (
    <section className="ps-section">

      {/* ── HEADER: eyebrow + title left, nav right ── */}
      <div className="ps-header">
        <div className="ps-header-left">
          <p className="ps-eyebrow">Our Gallery</p>
          <h2 className="ps-title">Moments We've Captured</h2>
        </div>
        <div className="ps-nav">
          <button className="ps-btn" onClick={() => goTo(current - 1)} disabled={current === 0} aria-label="Previous">&#8592;</button>
          <button className="ps-btn" onClick={() => goTo(current + 1)} disabled={current >= maxIndex} aria-label="Next">&#8594;</button>
        </div>
      </div>

      {/* ── CARDS ── */}
      <div className="ps-track-outer">
        <div
          className="ps-track"
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onMouseMove={onMouseMove}
        >
          {CARDS.map((card, i) => (
            <div key={i} className="ps-card">
              <img src={card.src} alt={card.label} draggable={false} />
              <div className="ps-overlay" />
              {/* <span className="ps-label">{card.label}</span> */}
            </div>
          ))}
        </div>
      </div>

      {/* ── DOTS ── */}
      <div className="ps-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            className={`ps-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
}