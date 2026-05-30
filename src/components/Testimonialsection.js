/*
  INSTALL: npm install swiper
  Replace BG_IMAGE_URL with your actual venue photo path.
*/

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const BG_IMAGE_URL =
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1800&q=80";

const testimonials = [
  {
    t: "Darsana Events made our wedding an absolute dream. Every detail was handled with such grace and professionalism. The gardens were breathtaking, and our guests are still talking about how magical the evening was.",
    a: "PRIYA & ARJUN",
    year: "WEDDING 2024",
  },
  {
    t: "From the first consultation to the final dance, every moment was curated to perfection. The team went above and beyond to make sure our special day exceeded every expectation we had.",
    a: "MEERA & KARTHIK",
    year: "WEDDING 2024",
  },
  {
    t: "We couldn't have imagined a more beautiful setting. The floral arrangements, the lighting, the cuisine — everything was simply exquisite. Our families were in awe from start to finish.",
    a: "ANJALI & ROHIT",
    year: "WEDDING 2023",
  },
  {
    t: "Choosing Darsana Events was the best decision we made. The staff treated us like royalty and the venue felt like something straight out of a fairytale. Truly an unforgettable experience.",
    a: "DIVYA & VIKRAM",
    year: "WEDDING 2023",
  },
  {
    t: "The attention to detail at Darsana Events is unparalleled. From the moment we arrived, every corner was adorned with love. Our ceremony by the gardens was nothing short of a fairytale come true.",
    a: "SNEHA & RAHUL",
    year: "WEDDING 2024",
  },
  {
    t: "We searched for months for the perfect venue and found everything we dreamed of here. The team's warmth, the stunning architecture, and the seamless coordination made our wedding utterly perfect.",
    a: "KAVYA & ADITYA",
    year: "WEDDING 2023",
  },
];

export default function TestimonialSection() {
  const swiperRef = useRef(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Cinzel:wght@400;500&display=swap');

        .ts-root {
          --gold-dark:       #b8860b;
          --gold-mid:        #c9a84c;
          --gold-pale:       #d4b896;
          --text-light:      #fdf6f0;
          --text-muted:      rgba(253,246,240,0.78);
          --card-bg:         rgba(20, 12, 8, 0.62);
          --card-bg-active:  rgba(20, 12, 8, 0.72);
          --card-border:     rgba(212, 184, 150, 0.50);
        }

        .ts-root {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 90px 0 70px;
          box-sizing: border-box;
        }

        .ts-bg {
          position: absolute;
          inset: 0;
          background-image: url('${BG_IMAGE_URL}');
          background-size: cover;
          background-position: center top;
          z-index: 0;
        }

        .ts-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(10, 5, 2, 0.72) 0%,
            rgba(18, 9, 4, 0.68) 50%,
            rgba(10, 5, 2, 0.78) 100%
          );
          z-index: 1;
        }

        .ts-header {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 24px;
          margin-bottom: 50px;
          width: 100%;
        }

        .ts-label {
          font-family: 'Cinzel', serif;
          font-size: 11px;
          letter-spacing: 6px;
          color: var(--gold-mid);
          display: block;
          margin-bottom: 14px;
        }

        .ts-rule {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 20px;
        }
        .ts-rule::before,
        .ts-rule::after {
          content: '';
          width: 56px;
          height: 0.5px;
          background: var(--gold-pale);
          opacity: 0.55;
        }
        .ts-rule-gem { color: var(--gold-mid); font-size: 12px; }

        .ts-title {
          font-size: clamp(36px, 5.5vw, 62px);
          font-weight: 300;
          color: var(--text-light);
          line-height: 1.1;
          margin: 0 0 18px;
          text-shadow: 0 2px 24px rgba(0,0,0,0.45);
        }
        .ts-title em {
          font-style: italic;
          color: var(--gold-mid);
        }

        .ts-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-weight: 300;
          color: var(--text-muted);
          line-height: 1.75;
          max-width: 380px;
          margin: 0 auto;
        }

        .ts-swiper-wrap {
          position: relative;
          z-index: 10;
          width: 100%;
        }

        .ts-swiper {
          width: 100%;
          padding: 32px 0 72px !important;
        }

        .ts-swiper .swiper-slide {
          width: 540px;
          max-width: 82vw;
          opacity: 1;
          transition: opacity 0.55s ease, transform 0.55s ease;
        }

        .ts-swiper .swiper-slide-active       { opacity: 1; }
        .ts-swiper .swiper-slide-prev,
        .ts-swiper .swiper-slide-next         { opacity: 0.60; }

        .ts-swiper .swiper-pagination          { bottom: 14px; }
        .ts-swiper .swiper-pagination-bullet {
          width: 8px; height: 8px;
          background: rgba(212,184,150,0.50);
          opacity: 1;
          transition: all 0.35s ease;
          border-radius: 50%;
        }
        .ts-swiper .swiper-pagination-bullet-active {
          background: var(--gold-dark);
          width: 28px;
          border-radius: 4px;
        }

        .ts-card {
          background: var(--card-bg);
          border: 1px solid var(--card-border);
          border-radius: 20px;
          padding: 58px 48px 46px;
          position: relative;
          text-align: center;
          backdrop-filter: blur(20px) saturate(1.1);
          -webkit-backdrop-filter: blur(20px) saturate(1.1);
          box-shadow:
            0 8px 40px rgba(0,0,0,0.55),
            0 2px 12px rgba(0,0,0,0.35),
            inset 0 1px 0 rgba(255,255,255,0.10);
          transition: background 0.5s ease, box-shadow 0.5s ease;
        }

        .swiper-slide-active .ts-card {
          background: var(--card-bg-active);
          box-shadow:
            0 28px 90px rgba(0,0,0,0.65),
            0 6px 24px rgba(0,0,0,0.40),
            inset 0 1px 0 rgba(255,255,255,0.14);
          border-color: rgba(212,184,150,0.70);
        }

        .ts-badge {
          position: absolute;
          top: -24px;
          left: 50%;
          transform: translateX(-50%);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(20,12,8,0.85);
          border: 1px solid var(--card-border);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(0,0,0,0.40);
        }
        .ts-badge svg {
          width: 20px; height: 20px;
          fill: var(--gold-mid);
        }

        .ts-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20.5px;
          font-style: italic;
          font-weight: 300;
          line-height: 1.78;
          color: var(--text-light);
          margin: 0 0 30px;
          text-shadow: 0 1px 8px rgba(0,0,0,0.30);
        }

        .ts-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        .ts-divider::before,
        .ts-divider::after {
          content: '';
          width: 44px;
          height: 0.5px;
          background: var(--gold-pale);
          opacity: 0.55;
        }
        .ts-div-gem { color: var(--gold-pale); font-size: 11px; }

        .ts-author {
          font-family: 'Cinzel', serif;
          font-size: 11px;
          letter-spacing: 3.5px;
          color: var(--gold-mid);
          margin: 0 0 7px;
          font-weight: 500;
        }
        .ts-year {
          font-family: 'Cinzel', serif;
          font-size: 10px;
          letter-spacing: 3px;
          color: rgba(212,184,150,0.60);
          margin: 0;
        }

        @media (max-width: 600px) {
          .ts-root   { padding: 80px 0 60px; }
          .ts-header { margin-bottom: 38px; }
          .ts-card   { padding: 50px 24px 38px; }
          .ts-quote  { font-size: 17px; }
          .ts-swiper .swiper-slide { max-width: 88vw; }
        }
      `}</style>

      <section className="ts-root">
        <div className="ts-bg" />
        <div className="ts-overlay" />

        {/* ── Header ── */}
        <div className="ts-header">
          <span className="ts-label">LOVE STORIES</span>
          <div className="ts-rule">
            <span className="ts-rule-gem">✦</span>
          </div>
          <h2 className="ts-title">
            What Our <em>Couples</em> Say
          </h2>
          <p className="ts-subtitle">
            Heartfelt stories from couples who trusted us
            to make their dream celebration a beautiful reality.
          </p>
        </div>

        {/* ── Carousel ── */}
        <div
          className="ts-swiper-wrap"
          onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
          onMouseLeave={() => swiperRef.current?.autoplay?.start()}
        >
          <Swiper
            className="ts-swiper"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            initialSlide={0}
            speed={200}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: -30,
              depth: 180,
              modifier: 1.6,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="ts-card">
                  <div className="ts-badge">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 7H6C5.4 7 5 7.4 5 8v4c0 .6.4 1 1 1h3l-1 3h2l1-3.5V8c0-.6-.4-1-1-1zM18 7h-4c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h3l-1 3h2l1-3.5V8c0-.6-.4-1-1-1z" />
                    </svg>
                  </div>
                  <p className="ts-quote">"{item.t}"</p>
                  <div className="ts-divider">
                    <span className="ts-div-gem">❧</span>
                  </div>
                  <p className="ts-author">{item.a}</p>
                  <p className="ts-year">{item.year}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}