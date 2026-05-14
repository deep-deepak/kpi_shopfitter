import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Gallery = () => {
    const images = [
        {
            id: 1,
            url: '/kpimages/5f81dcf7-a49b-4feb-b0a9-d1fe5095d12d.jpg',
            alt: 'Commercial building with curtain walling',
            title: 'Curtain Wall Systems',
            description: 'Enhance your commercial property with sleek curtain wall systems, offering natural light, modern aesthetics, and superior performance.'
        },
        {
            id: 2,
            url: '/kpimages/ab79aa3f-71c4-40fc-bbd6-5ffab0e32649.jpg',
            alt: 'Automatic glass shopfront',
            title: 'Automatic Shopfronts',
            description: 'Experience secure, energy-efficient, and stylish automatic door systems, tailored to elevate your business and meet modern design needs.'
        },
        {
            id: 3,
            url: '/kpimages/29b2be66-e944-49ef-8f8b-057241f666c5.jpg',
            alt: 'Glass shopfront installation',
            title: 'Innovative Retail Solutions',
            description: 'Explore premium glass shopfronts designed for diverse commercial applications, featuring sleek aluminium framing and modern aesthetics.'
        },
        {
            id: 4,
            url: '/kpimages/99aaa463-5a92-4603-819f-0ce65939bba2.jpg',
            alt: 'Roller shutter installation',
            title: 'Security Roller Shutters',
            description: 'Discover durable roller shutter solutions that combine security, thermal performance, and professional aesthetics for commercial spaces.'
        },
        {
            id: 5,
            url: '/kpimages/2cff9c8c-e49a-4f36-87a2-47d79fc70387.jpg',
            alt: 'Commercial property with shutters',
            title: 'Commercial Installations',
            description: 'Showcase your business with durable, secure, and visually striking aluminium shopfronts available in various custom configurations.'
        },
        {
            id: 6,
            url: '/kpimages/878bf69e-c100-480f-a46f-45f69d75cc76.jpg',
            alt: 'Retail shopfront with roller shutter',
            title: 'Retail & Office Environments',
            description: 'Create exceptional retail and office frontages that enhance brand presence, improve security, and reflect your unique identity.'
        }
    ];

    const [hoveredId, setHoveredId] = useState(null);

    return (
        <Container className="p-4">
            <Row className="g-4">
                {images.map((image) => (
                    <Col key={image.id} xs={12} md={6} lg={4}>
                        <div
                            className="gallery-item position-relative overflow-hidden rounded shadow-sm"
                            onMouseEnter={() => setHoveredId(image.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <img
                                src={image.url}
                                alt={image.alt}
                                className="gallery-image"
                            />
                            <div
                                className={`gallery-overlay ${hoveredId === image.id ? 'active' : ''}`}
                            >
                                <div className="overlay-content">
                                    <h3 className="gallery-title">{image.title}</h3>
                                    {image.description && (
                                        <p className="gallery-description">{image.description}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Gallery;
