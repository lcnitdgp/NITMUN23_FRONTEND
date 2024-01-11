import React from "react";
import GalleryComp from "../components/GalleryComp";
import Footer from "../components/Footer";

function Gallery () {
    return(
        <>
        <h1 className="gallery-title">Gallery</h1>
        <GalleryComp />
        <GalleryComp />
        <Footer />
        </>
    )
}

export default Gallery;