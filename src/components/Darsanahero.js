import React from "react";
import "../styles/Darsanahero.css";
import { useNavigate } from "react-router-dom";

export default function DarsanaAboutHero({
    currentPage,
    label,
    title,
    body,
    showStats,
    image
}) {

    const navigate = useNavigate();

    return (
        <div className="dah-wrapper">

            <section className="dah-hero">

                {/* Background Image */}
                <img
                    className="dah-bg-photo"
                    src={image}
                    alt="Elegant candlelit wedding venue with floral arch"
                />

                {/* Breadcrumb */}
                <div className="dah-breadcrumb">
                    <span
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/")}
                    >
                        HOME
                    </span>

                    <span className="dah-arrow">›</span>

                    <span
                        className="active"
                        style={{ cursor: "pointer" }}
                    >
                        {currentPage}
                    </span>
                </div>

                {/* Curved Panel */}
                <svg
                    className="dah-panel-svg"
                    viewBox="0 0 1440 420"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >

                    <defs>
                        <linearGradient
                            id="creamGrad"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop offset="0%" stopColor="#FFFCFB" />
                            <stop offset="35%" stopColor="#FDF7F6" />
                            <stop offset="65%" stopColor="#FBF2F0" />
                            <stop offset="100%" stopColor="#FAF0EE" />
                        </linearGradient>
                    </defs>

                    {/* Cream Shape */}
                    <path
                        d="M 0,0 L 580,0 Q 780,210 580,420 L 0,420 Z"
                        fill="url(#creamGrad)"
                    />

                    {/* Gold Border */}
                    <path
                        d="M 580,0 Q 780,210 580,420"
                        fill="none"
                        stroke="#c8a855"
                        strokeWidth="2"
                        vectorEffect="non-scaling-stroke"
                    />

                </svg>

                {/* Floral Decoration */}
                <svg
                    className="dah-floral-bl"
                    viewBox="0 0 110 110"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <g fill="none" stroke="#c8a855" strokeWidth="0.9">

                        <path d="M15 95 Q45 62 95 15" />
                        <path d="M8 102 Q38 70 88 28" />

                        <ellipse
                            cx="70"
                            cy="38"
                            rx="8"
                            ry="13"
                            transform="rotate(-45 70 38)"
                        />

                        <ellipse
                            cx="86"
                            cy="24"
                            rx="6"
                            ry="10"
                            transform="rotate(-50 86 24)"
                        />

                        <ellipse
                            cx="52"
                            cy="54"
                            rx="7"
                            ry="11"
                            transform="rotate(-40 52 54)"
                        />

                    </g>
                </svg>

                {/* Content */}
                <div className="dah-content">

                    {/* Ornament */}
                    <div className="dah-ornament" aria-hidden="true">

                        <svg width="44" height="20" viewBox="0 0 44 20" fill="none">

                            <circle
                                cx="22"
                                cy="10"
                                r="4.5"
                                stroke="#b8860b"
                                strokeWidth="1.1"
                            />

                            <circle
                                cx="22"
                                cy="10"
                                r="7.5"
                                stroke="#b8860b"
                                strokeWidth="0.75"
                            />

                            <path
                                d="M4 10 Q13 3 22 10 Q31 17 40 10"
                                stroke="#b8860b"
                                strokeWidth="0.85"
                                fill="none"
                            />

                            <circle
                                cx="4"
                                cy="10"
                                r="2.2"
                                fill="#b8860b"
                                opacity="0.5"
                            />

                            <circle
                                cx="40"
                                cy="10"
                                r="2.2"
                                fill="#b8860b"
                                opacity="0.5"
                            />

                        </svg>

                    </div>

                    {/* Label */}
                    <p className="dah-label">
                        {label}
                    </p>

                    {/* Title */}
                    <h1
                        className="dah-title"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />

                    {/* Divider */}
                    <div className="dah-divider">

                        <span className="dah-line" />

                        <svg
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="#b8860b"
                            aria-hidden="true"
                        >
                            <polygon points="6.5,0.5 8,5 13,5 9,8 10.5,12.5 6.5,10 2.5,12.5 4,8 0,5 5,5" />
                        </svg>

                        <span className="dah-line" />

                    </div>

                    {/* Body */}
                    <p className="dah-body">
                        {body}
                    </p>

                    {/* Stats */}
                    {showStats && (

                        <div className="dah-stats">

                            {/* Stat 1 */}
                            <div className="dah-stat">

                                <svg
                                    width="22"
                                    height="20"
                                    viewBox="0 0 24 22"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M2 17 L4 8 L9 13 L12 4 L15 13 L20 8 L22 17 Z"
                                        stroke="#b8860b"
                                        strokeWidth="1.4"
                                        strokeLinejoin="round"
                                    />

                                    <rect
                                        x="2"
                                        y="17"
                                        width="20"
                                        height="3"
                                        rx="1.2"
                                        stroke="#b8860b"
                                        strokeWidth="1.1"
                                    />

                                    <circle
                                        cx="2.5"
                                        cy="8"
                                        r="1.4"
                                        fill="#b8860b"
                                        opacity="0.85"
                                    />

                                    <circle
                                        cx="12"
                                        cy="4"
                                        r="1.4"
                                        fill="#b8860b"
                                        opacity="0.85"
                                    />

                                    <circle
                                        cx="21.5"
                                        cy="8"
                                        r="1.4"
                                        fill="#b8860b"
                                        opacity="0.85"
                                    />
                                </svg>

                                <span className="dah-num">40+</span>

                                <span className="dah-lbl">
                                    Years of
                                    <br />
                                    Excellence
                                </span>

                            </div>

                            <div className="dah-stat-sep" />

                            {/* Stat 2 */}
                            <div className="dah-stat">

                                <svg
                                    width="22"
                                    height="20"
                                    viewBox="0 0 24 22"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <polygon
                                        points="12,2 22,8.5 12,21 2,8.5"
                                        stroke="#b8860b"
                                        strokeWidth="1.4"
                                        strokeLinejoin="round"
                                    />

                                    <polyline
                                        points="2,8.5 7.5,8.5 12,2 16.5,8.5 22,8.5"
                                        stroke="#b8860b"
                                        strokeWidth="0.9"
                                        strokeLinejoin="round"
                                    />

                                    <line
                                        x1="7.5"
                                        y1="8.5"
                                        x2="12"
                                        y2="21"
                                        stroke="#b8860b"
                                        strokeWidth="0.75"
                                    />

                                    <line
                                        x1="16.5"
                                        y1="8.5"
                                        x2="12"
                                        y2="21"
                                        stroke="#b8860b"
                                        strokeWidth="0.75"
                                    />

                                </svg>

                                <span className="dah-num">500+</span>

                                <span className="dah-lbl">
                                    Memorable
                                    <br />
                                    Celebrations
                                </span>

                            </div>

                            <div className="dah-stat-sep" />

                            {/* Stat 3 */}
                            <div className="dah-stat">

                                <svg
                                    width="22"
                                    height="20"
                                    viewBox="0 0 24 22"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <rect
                                        x="1"
                                        y="10"
                                        width="22"
                                        height="11"
                                        rx="1.2"
                                        stroke="#b8860b"
                                        strokeWidth="1.2"
                                    />

                                    <path
                                        d="M5 10 V7 Q5 3 9 3 L12 1 L15 3 Q19 3 19 7 V10"
                                        stroke="#b8860b"
                                        strokeWidth="1.2"
                                        strokeLinejoin="round"
                                    />

                                    <rect
                                        x="10"
                                        y="14"
                                        width="4"
                                        height="7"
                                        rx="0.6"
                                        stroke="#b8860b"
                                        strokeWidth="1"
                                    />
                                </svg>

                                <span className="dah-num dah-num--xs">
                                    UNMATCHED
                                </span>

                                <span className="dah-lbl">
                                    Luxury &
                                    <br />
                                    Hospitality
                                </span>

                            </div>

                        </div>

                    )}

                </div>

            </section>

        </div>
    );
}