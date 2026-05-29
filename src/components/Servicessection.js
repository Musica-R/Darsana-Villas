import "../styles/Servicessection.css";

import { GiBigDiamondRing, GiFlowerPot, GiMusicalNotes, GiTheaterCurtains } from "react-icons/gi";
import { MdCorporateFare } from "react-icons/md";
import { FaGlassCheers } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { GiCandleHolder } from "react-icons/gi";
import React, { useEffect } from "react";

const ICONS = {
    weddings: <GiBigDiamondRing />,
    receptions: <FaGlassCheers />,
    corporate: <MdCorporateFare />,
    garden: <GiFlowerPot />,
    parties: <GiPartyPopper />,
    cultural: <GiTheaterCurtains />,
    gala: <GiCandleHolder />,
    entertainment: <GiMusicalNotes />,
};

const services = [
    {
        img: "/assets/wed.jpg",
        icon: "weddings",
        title: "WEDDINGS",
        desc: "From intimate ceremonies to grand celebrations, we craft weddings that perfectly reflect your love story.",
    },
    {
        img: "/assets/rec.jpg",
        icon: "receptions",
        title: "RECEPTIONS",
        desc: "Timeless elegance with modern luxury — the perfect setting for guests to celebrate alongside you.",
    },
    {
        img: "/assets/cor.jpg",
        icon: "corporate",
        title: "CORPORATE EVENTS",
        desc: "Impress clients and inspire teams with world-class corporate gatherings in our versatile venues.",
    },
    {
        img: "/assets/gar.jpg",
        icon: "garden",
        title: "GARDEN SOIRÉES",
        desc: "Step into our enchanting gardens for open-air events at golden hour surrounded by nature's finest.",
    },
    {
        img: "/assets/party.jpg",
        icon: "parties",
        title: "PRIVATE PARTIES",
        desc: "Milestone birthdays, anniversaries — bespoke private events that feel effortlessly luxurious.",
    },
    {
        img: "/assets/cul.jpg",
        icon: "cultural",
        title: "CULTURAL EVENTS",
        desc: "Celebrate tradition in style — rich ceremonies blending heritage with contemporary elegance.",
    },
    {
        img: "/assets/gala.jpg",
        icon: "gala",
        title: "GALA DINNERS",
        desc: "Sumptuous multi-course dinners under crystal chandeliers with our award-winning culinary team.",
    },
    {
        img: "/assets/eve.jpg",
        icon: "entertainment",
        title: "ENTERTAINMENT",
        desc: "State-of-the-art sound, lighting, and staging for performances, concerts, and grand showcases.",
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