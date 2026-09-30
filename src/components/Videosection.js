import { useEffect, useRef, useState, useCallback } from 'react';
import '../styles/Videosection.css';

const SLIDES = [
    { img: '/assets/col1.jpg', label: 'Weddings', sub: 'Where love stories begin', num: '01' },
    { img: '/assets/col3.jpg', label: 'Corporate Events', sub: 'Professional. Polished. Perfect.', num: '02' },
    { img: '/assets/col2.jpg', label: 'Social Celebrations', sub: 'Moments with your loved ones', num: '03' },
    { img: '/assets/col4.webp', label: 'Live Entertainment', sub: 'Music. Energy. Experience.', num: '04' },
    { img: '/assets/col5.webp', label: 'Picture Perfect', sub: 'Every frame, timeless', num: '05' },
];

export default function VideoSection() {
    const [active, setActive] = useState(0);
    const [prev, setPrev] = useState(null);
    const [dir, setDir] = useState(1);
    const [paused, setPaused] = useState(false);
    const timerRef = useRef(null);
    const sectionRef = useRef(null);

    const goTo = useCallback((idx, direction = 1) => {
        setPrev(active);
        setDir(direction);
        setActive(idx);
    }, [active]);

    const next = useCallback(() => goTo((active + 1) % SLIDES.length, 1), [active, goTo]);
    const prev_ = useCallback(() => goTo((active - 1 + SLIDES.length) % SLIDES.length, -1), [active, goTo]);

    useEffect(() => {
        clearInterval(timerRef.current);
        if (!paused) timerRef.current = setInterval(next, 5000);
        return () => clearInterval(timerRef.current);
    }, [paused, next]);

    /* scroll reveal */
    
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const io = new IntersectionObserver(
            entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('vs-in')),
            { threshold: 0.07 }
        );
        el.querySelectorAll('.vs-rev').forEach(t => io.observe(t));
        return () => io.disconnect();
    }, []);

    return (
        <section className="vs" ref={sectionRef}>

            {/* ─── HEADER ─── */}
            <div className="vs-header">
                <p className="vs-eyebrow vs-rev">A GLIMPSE OF OUR WORK</p>
                <h2 className="vs-title vs-rev vs-d1">
                    Every Event, <em>A Masterpiece</em>
                </h2>
                <div className="vs-rule vs-rev vs-d2"><span /><b>✦</b><span /></div>
            </div>

            {/* ─── MAIN CAROUSEL ─── */}
            <div
                className="vs-carousel vs-rev vs-d2"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {/* Slides */}
                {SLIDES.map((s, i) => (
                    <div
                        key={i}
                        className={`vs-slide ${i === active ? 'vs-slide--active' : ''} ${i === prev ? 'vs-slide--prev' : ''}`}
                    >
                        <img src={s.img} alt={s.label} className="vs-slide-img" />
                        <div className="vs-slide-scrim" />
                    </div>
                ))}

                {/* Caption */}
                <div className="vs-caption" key={active}>
                    <span className="vs-caption-num">{SLIDES[active].num} / 0{SLIDES.length}</span>
                    <h3 className="vs-caption-label">{SLIDES[active].label}</h3>
                    <p className="vs-caption-sub">{SLIDES[active].sub}</p>
                </div>

                {/* Arrow buttons */}
                <button className="vs-btn vs-btn--prev" onClick={prev_} aria-label="Previous">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button className="vs-btn vs-btn--next" onClick={next} aria-label="Next">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M9 18l6-6-6-6" /></svg>
                </button>

                {/* Progress bar */}
                <div className="vs-progress">
                    {SLIDES.map((_, i) => (
                        <button
                            key={i}
                            className={`vs-progress-seg ${i === active ? 'vs-progress-seg--active' : i < active ? 'vs-progress-seg--done' : ''}`}
                            style={{ '--dur': paused ? '0s' : '5s' }}
                            onClick={() => { clearInterval(timerRef.current); goTo(i); }}
                            aria-label={SLIDES[i].label}
                        />
                    ))}
                </div>
            </div>

            {/* ─── THUMBNAIL STRIP ─── */}
            <div className="vs-strip vs-rev vs-d3">
                {SLIDES.map((s, i) => (
                    <button
                        key={i}
                        className={`vs-thumb ${i === active ? 'vs-thumb--on' : ''}`}
                        onClick={() => { clearInterval(timerRef.current); goTo(i, i > active ? 1 : -1); }}
                    >
                        <img src={s.img} alt={s.label} />
                        <div className="vs-thumb-veil" />
                        <div className="vs-thumb-meta">
                            <span className="vs-thumb-num">{s.num}</span>
                            <span className="vs-thumb-name">{s.label}</span>
                        </div>
                        <div className="vs-thumb-bar" />
                    </button>
                ))}
            </div>

            {/* ─── CTA ─── */}
            <div className="vs-cta vs-rev vs-d3">
                <a href="/gallery" className="btn-outline">VIEW FULL GALLERY</a>
                <p className="vs-cta-note">Explore 500+ captured moments</p>
            </div>

        </section>
    );
}