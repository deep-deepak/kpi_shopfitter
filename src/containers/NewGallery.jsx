import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const images = [
    "/kpimages/29b2be66-e944-49ef-8f8b-057241f666c5.jpg",
    "/kpimages/ab79aa3f-71c4-40fc-bbd6-5ffab0e32649.jpg",
    "/kpimages/878bf69e-c100-480f-a46f-45f69d75cc76.jpg",
    "/kpimages/99aaa463-5a92-4603-819f-0ce65939bba2.jpg",
    "/kpimages/743a8b86-a44d-4f84-9ed0-611e55dc4f33.jpg",
    "/kpimages/bb2bda6e-1ee1-48e0-8df0-e23c567cd3b8.jpg",
    "/kpimages/f528730f-32fb-4546-8739-fba7d3e5e2fe.jpg",
    "/kpimages/ad0a65fe-a4cf-40ec-b978-ae946b9e4dce.jpg",
    "/kpimages/07cd9cea-9e73-4dbd-804e-87ba49529d91.jpg",
    "/kpimages/5f81dcf7-a49b-4feb-b0a9-d1fe5095d12d.jpg",
    "/kpimages/6c9443b4-f4d2-445a-8d6c-d87d5dadd2c7.jpg",
    "/kpimages/7c7f314b-0c0c-4b6b-a64f-ba6df2263e11.jpg",
    "/kpimages/2cff9c8c-e49a-4f36-87a2-47d79fc70387.jpg",
    "/kpimages/bbc3efd8-939b-44ed-9486-70dc5a8864f3.jpg",
    "/kpimages/e86e7d36-85c4-4397-9ff9-6563fd79b557.jpg",
    "/kpimages/97dd5a59-5b6e-4404-a3fc-fa257b9e7a0d.jpg",
    "/kpimages/9a42f11b-0182-49cb-b26a-97f22054543c.jpg",
    "/kpimages/119a8855-c478-489e-8c6d-cf1802cfbcf9.jpg",
    "/kpimages/49f649b6-7068-4fc8-9d7c-e25d9aa18556.jpg",
    "/kpimages/8fd6fb7a-045c-4b78-a250-0a186ae93222.jpg",
    "/kpimages/0d27a893-e8bd-44ca-9ab3-411b536e0119.jpg",
    "/kpimages/e57720b0-29a4-43a7-8f83-1e03c15f84ae.jpg",
    "/kpimages/dfc34db8-42bd-411c-90e9-1cab2f90f034.jpg",
];

export default function NewGallery() {
    const [visibleCount, setVisibleCount] = useState(8);

    const handleViewMore = () => {
        setVisibleCount((prevCount) => Math.min(prevCount + 4, images.length));
    };

    return (
        <div style={{
            padding: "30px",
            backgroundColor: "#f4f7f6",
        }}>
            <h2 className="updatedgalley_heading" data-aos="fade-in">
                Our Work
            </h2>
            <Container fluid className="Image_gallery">
                <Row className="g-3">
                    {images.slice(0, visibleCount).map((src, index) => (
                        <Col key={index} md={4}>
                            <div className="Image_gallery-item">
                                <img src={src} alt={`KPI Shopfitter project ${index + 1}`} className="img-fluid" />
                            </div>
                        </Col>
                    ))}
                </Row>
                {visibleCount < images.length && (
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
