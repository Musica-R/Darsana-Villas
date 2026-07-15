import "../styles/Servicessection.css";

import { GiBigDiamondRing, GiFlowerPot, GiPartyPopper } from "react-icons/gi";
import { MdCorporateFare } from "react-icons/md";
import React, { useEffect } from "react";

const ICONS = {
    wedding_reception: <GiBigDiamondRing />,
    intimate_wedding: <GiFlowerPot />,
    milestones: <GiPartyPopper />,
    corporate: <MdCorporateFare />,
};

const services = [
    {
        img: "/ass/ev/D10.png",
        icon: "wedding_reception",
        title: "WEDDING RECEPTION",
        desc: "From the first decoration to the final farewell, we orchestrate grand receptions with the elegance and precision that only 40 years of experience can deliver.",
    },
    {
        img: "/ass/32.jpeg",
        icon: "intimate_wedding",
        title: "INTIMATE WEDDINGS",
        desc: "Small in size, immense in feeling — our intimate wedding setups create deeply personal ceremonies wrapped in warmth and timeless beauty.",
    },
    {
        img: "/ass/ev/D16.webp",
        icon: "milestones",
        title: "BIRTHDAYS & MILESTONES",
        desc: "Whether it's a first birthday or a golden jubilee, we transform every family milestone into a celebration that will be cherished for generations.",
    },
    {
        img: "/assets/cor.jpg",
        icon: "corporate",
        title: "CORPORATE & SEMINARS",
        desc: "Impress clients, inspire teams, and host impactful seminars in our versatile, well-equipped venues — professional settings with seamless hospitality.",
    },
];

const ServicesSection = () => {

    useEffect(() => {
        const eyebrow = document.querySelector('.venue__services-eyebrow');
        const words = Array.from(document.querySelectorAll('.venue__heading-word'));
        const topCards = Array.from(document.querySelectorAll('.venue__card--slide-top'));
        const bottomCards = Array.from(document.querySelectorAll('.venue__card--slide-bottom'));

        const WORD_DELAY = 180;
        const CARD_START = 600;
        const CARD_STAGGER = 350;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    observer.disconnect();

                    if (eyebrow) eyebrow.classList.add('in-view');

                    words.forEach((word, i) => {
                        setTimeout(() => {
                            word.classList.add('in-view');
                        }, 200 + i * WORD_DELAY);
                    });

                    const cardsStart = 200 + words.length * WORD_DELAY + CARD_START;
                    topCards.forEach((card, i) => {
                        setTimeout(() => {
                            card.classList.add('in-view');
                        }, cardsStart + i * CARD_STAGGER);
                    });

                    const bottomStart = cardsStart + topCards.length * CARD_STAGGER;
                    bottomCards.forEach((card, i) => {
                        setTimeout(() => {
                            card.classList.add('in-view');
                        }, bottomStart + i * CARD_STAGGER);
                    });
                }
            });
        }, { threshold: 0.2 });

        if (topCards[0]) observer.observe(topCards[0]);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="venue__services-section">
            <div className="venue__services-inner">
                <p className="venue__services-eyebrow">WHAT WE OFFER</p>
                <h2 className="venue__services-heading">
                    <span className="venue__heading-word" data-word="0">Tailored</span>{" "}
                    <em className="venue__heading-word" data-word="1">Experiences</em>
                    <br />
                    <span className="venue__heading-word" data-word="2">for</span>{" "}
                    <span className="venue__heading-word" data-word="3">Every</span>{" "}
                    <span className="venue__heading-word" data-word="4">Occasion</span>
                </h2>

                <div className="venue__services-grid">
                    {services.map((service, index) => (
                        <div
                            className={`venue__card ${index < 4 ? 'venue__card--slide-top' : 'venue__card--slide-bottom'}`}
                            key={index}
                        >
                            <div className="venue__card-image-wrap">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="venue__card-image"
                                    loading="lazy"
                                />
                                <div className="venue__card-icon-ring">
                                    {ICONS[service.icon]}
                                </div>
                            </div>

                            <div className="venue__card-body">
                                <h3 className="venue__card-title">{service.title}</h3>
                                <p className="venue__card-desc">{service.desc}</p>
                            </div>

                            <span className="venue__card-hover-bar" aria-hidden="true" />
                        </div>
                    ))}
                </div>

                <div className="venue__services-divider">
                    <span className="venue__services-divider-line" />
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path
                            d="M7 1L8.5 5.5L13 7L8.5 8.5L7 13L5.5 8.5L1 7L5.5 5.5Z"
                            stroke="#B8922A"
                            strokeWidth="0.8"
                            fill="#B8922A"
                            fillOpacity="0.2"
                        />
                    </svg>
                    <span className="venue__services-divider-line" />
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;