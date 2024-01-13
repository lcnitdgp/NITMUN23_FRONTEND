import React from "react";
import GalleryComp from "../components/GalleryComp";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Gallery () {
    return(
        <>
        <Navbar/>
        <div className="about-gap"></div>
        <h1 className="gallery-title">Gallery</h1>
        <GalleryComp />
        <GalleryComp />
        <GalleryComp />
        <div className="about-gap"></div>
        <Footer />
        </>
    )
}

export default Gallery;