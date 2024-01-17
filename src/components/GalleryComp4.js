import React from "react";
import "./GalleryComp.css";
import img1 from './gallery_images/DSC_0998.jpeg';
import img2 from './gallery_images/DSC_0865.JPG';
import img3 from './gallery_images/DSC_0902.JPG';
import img4 from './gallery_images/DSC_0903.JPG';
import img5 from './gallery_images/DSC_0999.jpg';
import img6 from './gallery_images/DSC_0991.JPG';
import img7 from './gallery_images/DSC_1044.JPG';
import img8 from './gallery_images/DSC_1119.JPG';
import img9 from './gallery_images/DSC_1154.JPG';
import img10 from './gallery_images/IMG_9809.JPG';
import img11 from './gallery_images/IMG_9814.JPG';
import img12 from './gallery_images/IMG_9844.JPG';
import img13 from './gallery_images/IMG_9890.JPG';
import img14 from './gallery_images/DSC_00861.JPG';

 

function GalleryComp4 () {
    return(
        <>
			<div className="gallery-body">
       <article className="gallery">
       <img src={img2} alt="NITMUN" />
  <blockquote className="quote spacer">
    <span>Resolution through Diplomacy, not ideology</span>
    <cite>&mdash;NITMUN XII</cite>
  </blockquote>
  <img src={img8} alt="NITMUN" />
  <img src={img3} alt="NITMUN" />
  <img src={img5} alt="NITMUN" />
  <img src={img6} alt="NITMUN" />
  <img src={img7} alt="NITMUN" />
  <img src={img4} alt="NITMUN" />
  <img src={img9} alt="NITMUN" />
  <img src={img10} alt="NITMUN" />
  <div className="spacer"></div>
  <div className="spacer"></div>
  <img src={img11} alt="NITMUN" />
  <img src={img12} alt="NITMUN" />
  <img src={img13} alt="NITMUN" />
  <div className="spacer"></div>
  <img src={img14} alt="NITMUN" />
  <img src={img1} alt="NITMUN" />
</article>
</div>
        </>
    )
}

export default GalleryComp4;