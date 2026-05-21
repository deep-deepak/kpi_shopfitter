import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const faqs = [
    {
        id: 1,
        question: "What services does KPI Shopfitter provide?",
        answer: "KPI Shopfitter specialises in the design, fabrication, and installation of aluminium shopfronts, glass shopfronts, automatic doors, roller shutters (perforated, punched & grille), curtain wall systems, windows & doors, and protection screens. We serve commercial, retail, educational, and residential sectors across the UK."
    },
    {
        id: 2,
        question: "Which areas do you cover?",
        answer: "We are based in Ilford, London and provide installation and support services across London, Essex, Kent, and surrounding areas throughout the UK. Contact us to confirm coverage for your specific location."
    },
    {
        id: 3,
        question: "How long does a shopfront installation take?",
        answer: "Installation timelines depend on the size and complexity of the project. A standard shopfront typically takes 1–3 days. Larger projects such as curtain wall systems or multiple-unit shopfronts may take longer. We will provide a clear project timeline during the consultation phase."
    },
    {
        id: 4,
        question: "Do you offer free quotes?",
        answer: "Yes — we offer free, no-obligation consultations and quotes for all projects. Simply get in touch via our Contact page, call us on +44 7735 559454, or email info@kpishopfitter.co.uk and one of our team will be in touch promptly."
    },
    {
        id: 5,
        question: "What materials do you use for shopfronts and shutters?",
        answer: "We use high-grade aluminium profiles, toughened and laminated safety glass, and powder-coated steel hardware. All materials are chosen for their durability, weather resistance, and aesthetic quality, and comply with UK building regulations."
    },
    {
        id: 6,
        question: "Can you repair or replace existing roller shutters?",
        answer: "Absolutely. We offer a full repair and maintenance service for all types of roller shutters, including motor replacements, spring repairs, slat replacements, and full shutter upgrades. We also provide 24/7 emergency repair callouts."
    },
    {
        id: 7,
        question: "Are your installations compliant with UK building regulations?",
        answer: "Yes. All our installations are designed and carried out in full compliance with UK building regulations, including fire safety, wind load resistance, and thermal performance standards. We work closely with architects, surveyors, and project managers to meet all relevant requirements."
    },
    {
        id: 8,
        question: "Do you provide a warranty on your work?",
        answer: "Yes — all KPI Shopfitter installations come with a warranty covering materials and workmanship. Warranty periods vary by product type; full details are provided in your project agreement. We also offer ongoing maintenance packages to protect your investment long-term."
    },
    {
        id: 9,
        question: "Can shopfronts and shutters be custom designed?",
        answer: "Yes. Every project is tailored to the client's exact requirements. We offer a wide range of colours, finishes, glass types, and configurations to match your brand identity and architectural style. Our design team will work with you from concept through to installation."
    },
    {
        id: 10,
        question: "How do I get started with KPI Shopfitter?",
        answer: "Getting started is simple — call us on +44 7735 559454, email info@kpishopfitter.co.uk, or fill in the contact form on our Contact page. We will arrange a free site visit or consultation to understand your needs and provide a detailed quote."
    },
];

export default function FaqSection() {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section style={{ background: '#f8f9fa', padding: '80px 0' }}>
            <Container>
                <Row className="justify-content-center mb-5" data-aos="fade-up">
                    <Col lg={8} className="text-center">
                        <p className="text-uppercase fw-semibold mb-2" style={{ color: '#F47920', letterSpacing: '1.5px', fontSize: '14px' }}>
                            NEED ANSWERS?
                        </p>
                        <h2 style={{
                            fontFamily: '"Oswald", sans-serif',
                            fontWeight: 700,
                            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            color: '#111',
                        }}>
                            Frequently Asked Questions
                        </h2>
                        <div style={{ width: '50px', height: '3px', background: '#F47920', margin: '16px auto 0' }} />
                    </Col>
                </Row>

                <Row className="justify-content-center">
                    <Col lg={9}>
                        {faqs.map((faq, index) => (
                            <div
                                key={faq.id}
                                data-aos="fade-up"
                                data-aos-delay={index * 50}
                                style={{
                                    marginBottom: '12px',
                                    borderRadius: '6px',
                                    overflow: 'hidden',
                                    boxShadow: openId === faq.id
                                        ? '0 4px 20px rgba(244,121,32,0.15)'
                                        : '0 2px 8px rgba(0,0,0,0.06)',
                                    border: openId === faq.id ? '1px solid rgba(244,121,32,0.3)' : '1px solid #e9ecef',
                                    transition: 'all 0.3s ease',
                                    background: '#fff',
                                }}
                            >
                                {/* Question */}
                                <button
                                    onClick={() => toggle(faq.id)}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: '18px 24px',
                                        background: 'transparent',
                                        border: 'none',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        gap: '16px',
                                    }}
                                >
                                    <span style={{
                                        fontWeight: 600,
                                        fontSize: '1rem',
                                        color: openId === faq.id ? '#F47920' : '#1B2760',
                                        transition: 'color 0.3s ease',
                                        lineHeight: 1.4,
                                    }}>
                                        {faq.question}
                                    </span>
                                    <span style={{
                                        flexShrink: 0,
                                        width: '28px',
                                        height: '28px',
                                        borderRadius: '50%',
                                        background: openId === faq.id ? '#F47920' : '#1B2760',
                                        color: '#fff',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '18px',
                                        fontWeight: 300,
                                        lineHeight: 1,
                                        transition: 'all 0.3s ease',
                                        transform: openId === faq.id ? 'rotate(45deg)' : 'rotate(0deg)',
                                    }}>
                                        +
                                    </span>
                                </button>

                                {/* Answer */}
                                <div style={{
                                    maxHeight: openId === faq.id ? '300px' : '0',
                                    overflow: 'hidden',
                                    transition: 'max-height 0.4s ease',
                                }}>
                                    <p style={{
                                        padding: '0 24px 20px',
                                        margin: 0,
                                        color: '#555',
                                        lineHeight: 1.75,
                                        fontSize: '0.95rem',
                                        borderTop: '1px solid #f0f0f0',
                                        paddingTop: '16px',
                                    }}>
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Col>
                </Row>

                {/* CTA */}
                <Row className="justify-content-center mt-5" data-aos="fade-up">
                    <Col className="text-center">
                        <p style={{ color: '#666', marginBottom: '16px' }}>
                            Still have questions? We&apos;re happy to help.
                        </p>
                        <a
                            href="/contact"
                            style={{
                                display: 'inline-block',
                                padding: '14px 36px',
                                background: '#F47920',
                                color: '#fff',
                                fontWeight: 600,
                                textDecoration: 'none',
                                borderRadius: '4px',
                                letterSpacing: '1px',
                                textTransform: 'uppercase',
                                fontSize: '14px',
                                transition: 'background 0.3s ease',
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = '#1B2760'}
                            onMouseLeave={e => e.currentTarget.style.background = '#F47920'}
                        >
                            Contact Us
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
