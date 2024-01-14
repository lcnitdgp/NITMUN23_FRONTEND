import React from "react";
import GalleryComp from "../components/GalleryComp";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import GalleryComp1 from "../components/GalleryComp1";
import GalleryComp2 from "../components/GalleryComp2";

function Gallery () {
    return(
        <>
        <Navbar/>
        <div className="about-gap"></div>
        <h1 className="gallery-title">Gallery</h1>
     
        <GalleryComp1 />
        <GalleryComp2 />
        <GalleryComp />
        <div className="about-gap"></div>
        <Footer />
        </>
    )
}

export default Gallery;