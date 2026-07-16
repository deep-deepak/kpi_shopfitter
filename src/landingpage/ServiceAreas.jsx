import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaSearchLocation } from 'react-icons/fa';

const londonAreas = [
    ['Barking', 'Ilford', 'Croydon', 'Westminster', 'Camden', 'Hounslow', 'Brent', 'Greenwich'],
    ['Hackney', 'Stratford', 'Ealing', 'Walthamstow', 'Romford', 'Hammersmith', 'Tower Hamlets'],
];

const southEastAreas = [
    ['Kent', 'Hertfordshire', 'Buckinghamshire', 'Bedfordshire', 'Surrey', 'Essex', 'Sussex'],
    ['Berkshire', 'Hampshire', 'Cambridgeshire', 'Oxfordshire'],
];

const AreaList = ({ items }) => (
    <ul className="list-unstyled mb-0">
        {items.map((area) => (
            <li key={area} className="d-flex align-items-center gap-2 mb-2">
                <FaSearchLocation style={{ color: '#F47920', flexShrink: 0 }} />
                <span>{area}</span>
            </li>
        ))}
    </ul>
);

const ServiceAreas = () => {
    return (
        <section className="py-5">
            <Container>
                <Row className="align-items-center gy-5">
                    <Col lg={6}>
                        <span
                            className="badge mb-3 px-3 py-2"
                            style={{ background: '#f0f0f0', color: '#333', fontWeight: 500 }}
                        >
                            Service Areas
                        </span>
                        <h2 className="fw-bold mb-3">
                            Covering London, Greater London &amp; South East England
                        </h2>
                        <p className="text-muted mb-4">
                            KPI Shopfitter supports commercial properties across London, Greater
                            London, and South East England. We help businesses improve security,
                            access, and street-facing presentation with made-to-measure shopfronts,
                            shutters, glass systems, doors, and partitions.
                        </p>

                        <Row className="mb-4">
                            <Col sm={12} className="mb-2">
                                <h5 className="fw-bold">London &amp; Greater London</h5>
                            </Col>
                            <Col xs={6}>
                                <AreaList items={londonAreas[0]} />
                            </Col>
                            <Col xs={6}>
                                <AreaList items={londonAreas[1]} />
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={12} className="mb-2">
                                <h5 className="fw-bold">South East England</h5>
                            </Col>
                            <Col xs={6}>
                                <AreaList items={southEastAreas[0]} />
                            </Col>
                            <Col xs={6}>
                                <AreaList items={southEastAreas[1]} />
                            </Col>
                        </Row>
                    </Col>

                    <Col lg={6} className="text-center">
                        <img
                            src="/trust.webp"
                            alt="Trusted Shop Front Fitters"
                            style={{ maxWidth: '100%', height: 'auto' }}
                        />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ServiceAreas;
