import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const videos = [
    "/kpimages/421176a2-8647-4adc-8d04-443b93ca5c75.MP4",
    "/kpimages/71bb73b7-e3ba-4bad-8cb3-a6279a7b6835.MP4",
    "/kpimages/c25349ec-a9b2-4713-b115-ec0f1758a13b.MP4",
];

export default function VideoGallery() {
    const [visibleCount, setVisibleCount] = useState(4);

    const handleViewMore = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + 4, videos.length));
    };

    return (
        <div style={{
            padding: "30px",
            backgroundColor: "#f4f7f6",
        }}>
            <h2 className="updatedgalley_heading mt-5" data-aos="fade-in">
                Our Videos
            </h2>
            <Container fluid className="Image_gallery mt-4 mb-5">
                <Row className="g-4 justify-content-center">
                    {videos.slice(0, visibleCount).map((src, index) => (
                        <Col key={index} md={4} sm={6}>
                            <div className="Image_gallery-item">
                                <video
                                    src={src}
                                    controls
                                    className="img-fluid"
                                />
                            </div>
                        </Col>
                    ))}
                </Row>
                {visibleCount < videos.length && (
                    <div className="text-center mt-3">
                        <Button variant="primary" onClick={handleViewMore} style={{ background: "#F47920", border: "none" }}>
                            View More
                        </Button>
                    </div>
                )}
            </Container>
        </div>
    );
}
