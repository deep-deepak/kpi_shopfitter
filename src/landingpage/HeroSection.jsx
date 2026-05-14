import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const HeroSection = () => {
    const services = [
        "Design • Fabrication • Installation",
        "Windows • Doors • Curtain Walling",
        "Commercial • Residential • Industrial",
        "Planning • Building • Delivering",
        "Quality • Innovation • Excellence"
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [charIndex, setCharIndex] = useState(0);
    const typingSpeed = 100; // Speed of typing effect in milliseconds
    const pauseDuration = 2000; // Pause duration after typing each service

    useEffect(() => {
        if (charIndex < services[currentTextIndex].length) {
            const typingTimeout = setTimeout(() => {
                setDisplayText((prev) => prev + services[currentTextIndex][charIndex]);
                setCharIndex((prev) => prev + 1);
            }, typingSpeed);

            return () => clearTimeout(typingTimeout);
        } else {
            const pauseTimeout = setTimeout(() => {
                setCharIndex(0);
                setDisplayText("");
                setCurrentTextIndex((prevIndex) =>
                    prevIndex === services.length - 1 ? 0 : prevIndex + 1
                );
            }, pauseDuration);

            return () => clearTimeout(pauseTimeout);
        }
    }, [charIndex, currentTextIndex, services]);

    return (
        <div
            data-aos="slide-up"
            style={{
                position: 'relative',
                height: '100vh',
                width: '100%',
                overflow: 'hidden',
                backgroundImage: 'url("/kpimages/ab79aa3f-71c4-40fc-bbd6-5ffab0e32649.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                marginTop: '0', // Remove margin as header is fixed
                paddingTop: '76px' // Add padding to account for fixed header
            }}
        >
            {/* Dark overlay */}
            <div
                data-aos="zoom-in"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.35)',
                }}
            />

            {/* Content */}
            <Container
                className="h-100 d-flex flex-column justify-content-center align-items-center text-white text-center position-relative"
            >
                <h1
                    className="display-1 fw-bold mb-2"
                    style={{
                        fontSize: 'clamp(2rem, 6vw, 4rem)',
                        letterSpacing: '2px',
                        lineHeight: 1.15,
                    }}
                >
                    KPI SHOPFITTER
                </h1>
                <p
                    className="fw-semibold mb-4 text-white"
                    style={{
                        fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                        letterSpacing: '3px',
                        textTransform: 'uppercase',
                        opacity: 0.9,
                    }}
                >
                    Shopfronts &nbsp;|&nbsp; Shutters &nbsp;|&nbsp; Signage
                </p>
                <div
                    className="fs-4 position-relative"
                    style={{
                        fontSize: 'clamp(2rem, 3vw, 1.5rem)!important',
                        letterSpacing: '1px',
                        height: '2em', // Fixed height to prevent layout shift
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: "#F47920",
                        fontWeight: 600,
                    }}
                >
                    {displayText}
                </div>
            </Container>
        </div>
    );
};

export default HeroSection;
