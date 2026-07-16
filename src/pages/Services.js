import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';
import DarsanaAboutHero from '../components/Darsanahero';
import {
  DoorOpen,
  ConciergeBell,
  Flower2,
  LayoutTemplate,
  Lightbulb,
  Armchair,
  Users,
  ClipboardList,
  Leaf,
  Soup,
  UtensilsCrossed,
  Utensils,
  Flame,
  IceCreamBowl,
  CupSoda,
  Salad,
  Calendar,
  Gem,
  Award,
  Gift,
  ShieldCheck,
  Building2,
  Trees,
  ParkingSquare,
  Sparkles,
  Home,
  FileText,
  Loader2,
  X,
  Download,
} from 'lucide-react';
import { saveAs } from "file-saver";


const eventServices = [
  { icon: Flower2, label: 'Dream Décor & Floral Styling' },
  { icon: LayoutTemplate, label: 'Stage Design' },
  { icon: Lightbulb, label: 'Premium Lighting' },
  { icon: Armchair, label: 'Tables & Chairs' },
  { icon: Users, label: 'Guest Seating' },
  { icon: ClipboardList, label: 'Event Coordination' },
  { icon: DoorOpen, label: 'Bridal Entry Setup' },
];

const catering = [
  { icon: Leaf, label: 'Traditional Kerala Sadya' },
  { icon: Soup, label: 'South Indian' },
  { icon: UtensilsCrossed, label: 'North Indian' },
  { icon: Utensils, label: 'Chinese' },
  { icon: Flame, label: 'Arabic & Mandi' },
  { icon: ConciergeBell, label: 'Continental' },
  { icon: Flame, label: 'BBQ & Live Counters' },
  { icon: IceCreamBowl, label: 'Desserts & Payasam' },
  { icon: CupSoda, label: 'Fresh Beverages' },
  { icon: Salad, label: 'Vegetarian & Non-Vegetarian' },
];

const packages = [
  {
    num: '01',
    img: '/ass/32.jpeg',
    label: 'WEDDING PACKAGE',
    desc: 'A full day experience with all the essentials for your ceremony from start to finish.',
    price: '₹1,60,000',
    guests: 'Minimum 150 Guests',
  },
  {
    num: '02',
    img: '/ass/ev/D21.webp',
    label: 'RECEPTION PACKAGE',
    desc: 'An evening full of celebration with fine venue, décor and dining to delight your guests.',
    price: '₹2,25,000',
    guests: 'Minimum 100 Guests',
  },
];

const trustPoints = [
  { icon: Gem, title: 'Luxury Venues', body: 'Exquisite spaces with elegant settings' },
  { icon: Award, title: 'Premium Services', body: 'World-class hospitality for every celebration' },
  { icon: Gift, title: 'Custom Packages', body: 'Tailored packages to match your dream celebration' },
  { icon: ShieldCheck, title: 'Trust & Experience', body: 'Years of excellence in creating memories' },
];

const whyChooseUs = [
  {
    icon: Building2,
    title: 'Grand Venue Capacity',
    desc: 'Accommodates up to 2,500 guests',
  },
  {
    icon: Trees,
    title: 'Flexible Event Spaces',
    desc: '3 Outdoor Spaces • 2 Indoor Halls',
  },
  {
    icon: ClipboardList,
    title: 'Complete Event Management',
    desc: 'Venue • Décor • Catering • Lighting',
  },
  {
    icon: ParkingSquare,
    title: 'Guest Convenience',
    desc: 'Ample Parking for Guests',
  },
  {
    icon: Sparkles,
    title: 'Comfort First',
    desc: 'Clean & Well-Maintained Washrooms',
  },
  {
    icon: Home,
    title: 'Stay With Us',
    desc: '2 BHK Service Villas for Families',
  },
];

function useScrollAnimate(selector, className = 'sa-in', options = {}) {
  useEffect(() => {
    const els = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, className]);
}

/* ===================== SHARED PDF DOWNLOAD HELPER ===================== */
async function downloadPdf(pdfUrl) {
  try {
    const response = await fetch(pdfUrl, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to download PDF");
    }

    const blob = await response.blob();

    saveAs(blob, "Darsana-Service-Brochure.pdf");
  } catch (error) {
    console.error(error);

    // Mobile / network fallback: let the browser try to open it directly.
    window.open(pdfUrl, "_blank");
  }
}

/* ===================== DOWNLOAD CONFIRM POPUP ===================== */
function DownloadConfirmPopup({ pdfUrl, onClose, onConfirm, isDownloading, error }) {
  // Lock background scroll while the popup is open (also matters on mobile).
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className="pdf-modal-overlay" onClick={onClose}>
      <div
        className="pdf-confirm-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Download service PDF"
      >
        <button type="button" className="pdf-icon-btn pdf-confirm-close" onClick={onClose} aria-label="Close">
          <X size={18} />
        </button>

        <div className="pdf-confirm-icon">
          <FileText size={30} />
        </div>

        <h3 className="pdf-confirm-title">Download Service Brochure</h3>
        <p className="pdf-confirm-body">
          This will save the PDF to your device so you can view it anytime, even offline.
        </p>

        {error && <p className="pdf-modal-error-text">{error}</p>}

        <div className="pdf-confirm-actions">
          <button type="button" className="pdf-confirm-download" onClick={onConfirm} disabled={isDownloading}>
            {isDownloading ? (
              <>
                <Loader2 size={16} className="svc-pdf-spin" style={{ marginRight: 8, verticalAlign: '-3px' }} />
                DOWNLOADING...
              </>
            ) : (
              <>
                <Download size={16} style={{ marginRight: 8, verticalAlign: '-3px' }} />
                DOWNLOAD PDF
              </>
            )}
          </button>
          <button type="button" className="pdf-confirm-cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

/* ===================== VIEW SERVICE PDF BUTTON ===================== */
function ViewServicePdfButton({ pdfUrl = '/assets/Coffee.pdf' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [error, setError] = useState(null);

  const handleConfirmDownload = async () => {
    setIsDownloading(true);
    setError(null);
    try {
      // Quick existence check so we don't silently "download" an HTML
      // error/rewrite page instead of the real PDF (same SPA-rewrite bug
      // as before, just checked before triggering the download this time).
      const res = await fetch(pdfUrl, { method: 'HEAD', cache: 'no-store' });
      const contentType = (res.headers.get('content-type') || '').toLowerCase();
      if (!res.ok || contentType.includes('html')) {
        setError('Sorry, the PDF is temporarily unavailable. Please try again shortly.');
        setIsDownloading(false);
        return;
      }

      await downloadPdf(pdfUrl);

      setIsDownloading(false);
      setIsOpen(false);
    } catch (err) {
      // Network failure — fall back to letting the browser try directly.
      await downloadPdf(pdfUrl);
      setIsDownloading(false);
      setIsOpen(false);
    }
  };

  return (
    <>
      <button type="button" className="svc-pdf-btn" onClick={() => setIsOpen(true)}>
        <FileText size={16} style={{ marginRight: 8, verticalAlign: '-3px' }} />
        VIEW SERVICE PDF
      </button>

      {isOpen && (
        <DownloadConfirmPopup
          pdfUrl={pdfUrl}
          onClose={() => setIsOpen(false)}
          onConfirm={handleConfirmDownload}
          isDownloading={isDownloading}
          error={error}
        />
      )}
    </>
  );
}

function Services() {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);

  useScrollAnimate('.sa-fade-up', 'sa-in');
  useScrollAnimate('.ec-anim, .ec-anim-scale', 'ec-anim-in');

  return (
    <div className="services-page">
      <DarsanaAboutHero
        currentPage="SERVICES"
        label="WHAT WE OFFER"
        title={`Every Celebration Detail,<br /><em>Beautifully Perfected</em>`}
        body={`From full wedding planning to bespoke florals and fine dining, our in-house team handles every element of your celebration.`}
        showStats={true}
        image="/assets/roof.webp"
      />

      {/* ===================== VIEW SERVICE PDF BUTTON ===================== */}
      <div className="svc-pdf-bar sa-fade-up">
        <ViewServicePdfButton pdfUrl="/assets/Coffee.pdf" />
      </div>

      {/* ===================== EVERYTHING YOU NEED ===================== */}
      <section
        className="svc-everything"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(41,24,10,.55) 0%, rgba(58,34,15,.35) 45%, rgba(75,46,20,.55) 100%), url('/ass/ev/D9.webp')",
        }}
      >
        <div className="svc-everything-inner">
          <div className="text-center svc-everything-head sa-fade-up">
            <p className="section-label">ONE VENUE, EVERY DETAIL</p>
            <h2 className="section-title">
              Everything You Need,<br /><em>All In One Place</em>
            </h2>
            <div className="gold-divider"><span>✦</span></div>
            <p className="svc-everything-sub">
              From stunning décor to exquisite cuisine, we take care of every detail
              so you can celebrate without a worry.
            </p>
          </div>

          <div className="svc-everything-grid">
            <div className="svc-list-col sa-fade-up">
              <div className="svc-col-icon"><DoorOpen size={22} /></div>
              <h3 className="svc-list-heading">Event Services</h3>
              <ul className="svc-list">
                {eventServices.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i}>
                      <span className="svc-li-icon"><Icon size={15} /></span>
                      {item.label}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="svc-list-col sa-fade-up">
              <div className="svc-col-icon"><ConciergeBell size={22} /></div>
              <h3 className="svc-list-heading">Catering</h3>
              <ul className="svc-list">
                {catering.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li key={i}>
                      <span className="svc-li-icon"><Icon size={15} /></span>
                      {item.label}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="svc-everything-cta sa-fade-up">
            <Link to="/contact" className="btn-gold">
              <Calendar size={15} style={{ marginRight: 8, verticalAlign: '-3px' }} />
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== SIMPLE PACKAGES ===================== */}
      <section className="svc-packages">
        <div className="text-center svc-packages-head sa-fade-up">
          <p className="section-label">TRANSPARENT PRICING</p>
          <h2 className="section-title">
            Simple Packages,<br /><em>Beautiful Celebration</em>
          </h2>
          <div className="gold-divider"><span>✦</span></div>
        </div>

        <div className="svc-pkg-grid">
          {packages.map((pkg) => (
            <div className="svc-pkg-card" key={pkg.num}>
              <div className="svc-pkg-img ec-anim-scale">
                <img src={pkg.img} alt={pkg.label} />
                <div className="svc-pkg-ribbon">
                  <span className="svc-pkg-ribbon-num">{pkg.num}</span>
                  <span className="svc-pkg-ribbon-label">PACKAGE</span>
                </div>
              </div>

              <div className="svc-pkg-body">
                <h3 className="svc-pkg-title ec-anim">{pkg.label}</h3>
                <div className="svc-pkg-bar ec-anim" />

                <div className="pkg-price-row ec-anim">
                  <span className="pkg-from">From</span>
                  <span className="pkg-price">{pkg.price}</span>
                </div>
                <p className="pkg-guests ec-anim">{pkg.guests}</p>
                <p className="svc-pkg-desc ec-anim">{pkg.desc}</p>

                <Link to="/contact" className="svc-pkg-cta ec-anim">
                  VIEW DETAILS <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="svc-trust-bar sa-fade-up">
          {trustPoints.map((t, i) => {
            const Icon = t.icon;
            return (
              <div className="svc-trust-item" key={i}>
                <span className="svc-trust-icon"><Icon size={22} /></span>
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================== WHY CHOOSE US ===================== */}
      <section className="svc-why-choose">
        <div className="text-center svc-why-head sa-fade-up">
          <p className="section-label">THE DARSANA DIFFERENCE</p>
          <h2 className="section-title">
            Why <em>Choose Us?</em>
          </h2>
          <div className="gold-divider"><span>✦</span></div>
        </div>

        <div className="svc-why-grid">
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon;
            return (
              <div className="svc-why-item sa-fade-up" key={i}>
                <span className="svc-why-icon"><Icon size={20} /></span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="cta-banner">
        <h2 className="section-title">Not Sure Which <em>Package</em> Is Right?</h2>
        <p>Our team is here to guide you through every option and help you find the perfect fit.</p>
        <Link to="/contact" className="btn-gold">LET'S TALK</Link>
      </section>
    </div>
  );
}

export default Services;