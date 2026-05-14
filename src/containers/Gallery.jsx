import React from 'react';
import { Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function GallerySection() {
    const images = [
        "/kpimages/29b2be66-e944-49ef-8f8b-057241f666c5.jpg",
        "/kpimages/ab79aa3f-71c4-40fc-bbd6-5ffab0e32649.jpg",
        "/kpimages/878bf69e-c100-480f-a46f-45f69d75cc76.jpg",
        "/kpimages/743a8b86-a44d-4f84-9ed0-611e55dc4f33.jpg",
        "/kpimages/5f81dcf7-a49b-4feb-b0a9-d1fe5095d12d.jpg",
        "/kpimages/2cff9c8c-e49a-4f36-87a2-47d79fc70387.jpg",
        "/kpimages/ad0a65fe-a4cf-40ec-b978-ae946b9e4dce.jpg",
    ];

    return (
        <div className="updatedgalley-section">
            <div className="overlay"></div>

            <Container className="updatedgalley">
                <h1 className='updatedgalley_heading' data-aos="fade-in">Our Work</h1>
                <div className="updatedgalley_inner" data-aos="fade-up">
                    {images.map((src, index) => (
                        <div key={index} className="item">
                            <Image
                                src={src}
                                alt={`KPI Shopfitter project ${index + 1}`}
                                className="updatedgalley-image"
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}
