import PageHeading from '@/common/PageHeading';
import Seo from '@/common/Seo';
import Layout from '@/layout/Layout';
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const locations = [
    {
        id: 1,
        city: 'Ilford, London',
        address: '141 Richmond Road, Ilford, London IG1 1JT',
        phone: '+44 7735 559454',
        phoneHref: '+447735559454',
        hours: 'Mon - Fri: 9:00 AM - 6:00 PM',
        mapSrc: 'https://maps.google.com/maps?q=141+Richmond+Road,+Ilford,+London+IG1+1JT,+England&output=embed',
        directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=141+Richmond+Road,+Ilford,+London+IG1+1JT,+England',
    },
    {
        id: 2,
        city: 'Thornton Heath',
        address: '90 Silverleigh Road, Thornton Heath, SM5 3BA',
        phone: '0330 133 3751',
        phoneHref: '03301333751',
        hours: 'Mon - Fri: 9:00 AM - 6:00 PM',
        mapSrc: 'https://maps.google.com/maps?q=90+Silverleigh+Road,+Thornton+Heath,+SM5+3BA,+England&output=embed',
        directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=90+Silverleigh+Road,+Thornton+Heath,+SM5+3BA,+England',
    },
];

const ContactForm = () => {
    return (
        <Layout>
            <Seo title={"Contact KPI Shopfitter | Get a Free Quote Today"} descrption={"Contact KPI Shopfitter for a free, no-obligation quote. Call +44 7735 559454 or email info@kpishopfitter.co.uk. Based in Ilford, London — serving London, Essex, Kent and the UK."} />
            <PageHeading title={"Contact us"} image={"/kpimages/ad0a65fe-a4cf-40ec-b978-ae946b9e4dce.jpg"} />

            <Container className="py-5">
                <Row className="justify-content-between">
                    <Col lg={5}>

                        <div>
                            <h5>Name:</h5>
                            <p className="mb-0 " style={{ color: "#F47920" }}>KPI Shopfitter</p>
                        </div>
                        <br />
                        <div className="mb-4">
                            <h5>E-mail:</h5>
                            <a href="mailto:info@kpishopfitter.co.uk"
                                className=" text-decoration-none" style={{ color: "#F47920" }}>
                                info@kpishopfitter.co.uk
                            </a>
                        </div>

                    </Col>

                    <Col lg={6}>
                        <Form className="bg-white p-4 shadow-sm rounded">
                            <Form.Group className="mb-3">
                                <Form.Label>Name <span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    required
                                />
                            </Form.Group>

                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            placeholder="Enter your phone number"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label>Message <span className="text-danger">*</span></Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Enter your message"
                                    required
                                />
                            </Form.Group>



                            <Button
                                variant="primary"
                                type="submit"
                                className="px-4 submit_btn"
                            >
                                SUBMIT
                            </Button>
                        </Form>
                    </Col>

                </Row>

            </Container>

            <div className="py-5" style={{ background: "#f4f6f8" }}>
                <Container>
                    <h3 className="text-center mb-4">Our Locations</h3>
                    <Row className="g-4">
                        {locations.map((loc) => (
                            <Col xs={12} key={loc.id}>
                                <div
                                    className="rounded-3 overflow-hidden shadow-sm d-flex flex-column flex-md-row"
                                    style={{ background: "#eaf0f6" }}
                                >
                                    <div className="p-4 flex-fill">
                                        <span
                                            className="badge d-inline-flex align-items-center gap-2 mb-3 px-3 py-2"
                                            style={{ background: "#0b2a4a", color: "#fff", fontWeight: 500 }}
                                        >
                                            <FaMapMarkerAlt /> Our Location
                                        </span>
                                        <h4 className="fw-bold mb-2">{loc.city}</h4>
                                        <p className="text-muted mb-3">{loc.address}</p>

                                        <p className="d-flex align-items-center gap-2 mb-2">
                                            <FaPhoneAlt style={{ color: "#F47920" }} />
                                            <a
                                                href={`tel:${loc.phoneHref}`}
                                                className="text-decoration-none"
                                                style={{ color: "#212529" }}
                                            >
                                                {loc.phone}
                                            </a>
                                        </p>
                                        <p className="d-flex align-items-center gap-2 mb-4">
                                            <FaClock style={{ color: "#F47920" }} />
                                            {loc.hours}
                                        </p>

                                        <div className="d-flex flex-wrap gap-2">
                                            <a
                                                href={loc.directionsUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn btn-outline-dark btn-sm"
                                            >
                                                Get Directions
                                            </a>
                                            <a
                                                href={`tel:${loc.phoneHref}`}
                                                className="btn btn-sm text-white"
                                                style={{ background: "#F47920" }}
                                            >
                                                Call Now
                                            </a>
                                        </div>
                                    </div>

                                    <div style={{ flex: "0 0 45%", minHeight: "300px" }}>
                                        <iframe
                                            src={loc.mapSrc}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0, minHeight: "300px" }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </Layout>
    );
};

export default ContactForm;