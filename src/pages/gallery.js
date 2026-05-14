import PageHeading from '@/common/PageHeading'
import Seo from '@/common/Seo'
import GallerySection from '@/containers/Gallery'
import NewGallery from '@/containers/NewGallery'
import VideoGallery from '@/containers/VideoGallery'
import Layout from '@/layout/Layout'
import React from 'react'

export default function Gallery() {
    return (
        <>
            <Layout>
                <Seo title={"gallery"} descrption={"gallery"} />
                <PageHeading title={"Gallery"} image={"/kpimages/bb2bda6e-1ee1-48e0-8df0-e23c567cd3b8.jpg"} />
                {/* <GallerySection /> */}
                <NewGallery />
                <VideoGallery />
            </Layout>

        </>
    )
}
