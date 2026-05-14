import Link from "next/link";
import { blogPosts } from "../../data/blogData";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Layout from "@/layout/Layout";
import PageHeading from "@/common/PageHeading";
import Seo from "@/common/Seo";

export default function Home() {
    return (
        <Layout>
            <Seo title={"Blog | KPI Shopfitter"} descrption={"Read the latest articles and insights from KPI Shopfitter on shopfronts, roller shutters, curtain walling, and commercial property solutions."} />
            <PageHeading title={"Blog"} image={"/kpimages/f528730f-32fb-4546-8739-fba7d3e5e2fe.jpg"} />
            <Container className="py-5">
                <h1 className="text-center mb-4">Latest Articles</h1>
                <Row>
                    {blogPosts.map((post) => (
                        <Col md={6} lg={4} key={post.id} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={post.image} alt={post.title} style={{height:"280px"}}/>
                                <Card.Body>
                                    <Card.Title style={{height:"80px"}}>{post.title}</Card.Title>
                                    <Card.Text className="text-muted">{post.date}</Card.Text>
                                    <Link href={`/blog/${post.slug}`} passHref>
                                        <Button className="read_more">Read More</Button>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Layout>
    );
}
