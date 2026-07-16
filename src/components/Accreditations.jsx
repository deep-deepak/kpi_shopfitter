import React from 'react';
import { Container } from 'react-bootstrap';

const logos = [
    { src: '/chas.avif', alt: 'CHAS Accredited Contractor' },
    { src: '/safecibtr.avif', alt: 'SafeContractor Approved' },
    { src: '/doorsafe.avif', alt: 'DoorSafe Registered' },
];

const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

const Accreditations = () => {
    return (
        <section className="py-5 bg-white text-center">
            <Container>
                <h2 className="mb-2">Accreditations</h2>
                <div
                    className="mx-auto mb-5"
                    style={{ width: '60px', height: '3px', background: '#F47920' }}
                ></div>
            </Container>

            <div className="accreditations-marquee">
                <div className="accreditations-track">
                    {marqueeLogos.map((logo, i) => (
                        <div className="accreditations-item" key={`${logo.src}-${i}`}>
                            <img src={logo.src} alt={logo.alt} />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .accreditations-marquee {
                    overflow: hidden;
                    width: 100%;
                    -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
                    mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
                }
                .accreditations-track {
                    display: flex;
                    align-items: center;
                    width: max-content;
                    animation: accreditations-scroll 20s linear infinite;
                }
                .accreditations-marquee:hover .accreditations-track {
                    animation-play-state: paused;
                }
                .accreditations-item {
                    flex: 0 0 auto;
                    padding: 0 40px;
                }
                .accreditations-item img {
                    max-height: 90px;
                    width: auto;
                    object-fit: contain;
                }
                @keyframes accreditations-scroll {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
                @media (prefers-reduced-motion: reduce) {
                    .accreditations-track {
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Accreditations;
