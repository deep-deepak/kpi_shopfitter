import PageHeading from '@/common/PageHeading';
import Seo from '@/common/Seo';
import Layout from '@/layout/Layout';
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
const ContactForm = () => {
    return (
        <Layout>
            <Seo title={"Contact KPI Shopfitter | Get a Free Quote Today"} descrption={"Contact KPI Shopfitter for a free, no-obligation quote. Call +44 7735 559454 or email kpishuttersuk@gmail.com. Based in Ilford, London — serving London, Essex, Kent and the UK."} />
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
                            <h5>Phone:</h5>
                            <p className=" mb-0" style={{ color: "#F47920" }}>+44 7735 559454</p>
                        </div>
                        <div className="mb-4">
                            <h5>E-mail:</h5>
                            <a href="mailto:kpishuttersuk@gmail.com"
                                className=" text-decoration-none" style={{ color: "#F47920" }}>
                                kpishuttersuk@gmail.com
                            </a>
                        </div>
                        <div className="mb-4">
                            <h5>Address:</h5>
                            <p className=" mb-0" style={{ color: "#F47920" }}>
                                141 Richmond Road,<br />
                                Ilford, London IG1 1JT
                            </p>
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
            <Row>
                <Col md={12} style={{ borderTop: "5px solid #F47920" }}>
                <iframe src="https://maps.google.com/maps?q=141+Richmond+Road,+Ilford,+London+IG1+1JT,+England&output=embed" width="100%" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Col>
            </Row>
        </Layout>
    );
};

export default ContactForm;