import React from "react";
import "./GalleryComp.css";

function GalleryComp () {
    return(
        <>
		<div className="gallery-body">
       <article className="gallery">
  <img src="./assets/NITMUN2.jpg" alt="NITMUN" />
  <blockquote className="quote spacer">
  <span>Resolution through Diplomacy, not ideology</span>
    <cite>&mdash;NITMUN XII</cite>
  </blockquote>
  <img src={"/assets/NITMUN4.jpg"} alt="NITMUN" />
  <img src="./assets/NITMUN3.jpg" alt="NITMUN" />
  <img src="./assets/NITMUN5.jpg" alt="NITMUN" />
  <img src="./assets/NITMUN7.jpg" alt="NITMUN" />
  <div className="spacer"></div>
  <img src="./assets/NITMUN8.jpg" alt="NITMUN" />
  <img src="./assets/NITMUN9.jpg" alt="NITMUN" />
  <img src="./assets/NITMUN10.jpg" alt="NITMUN" />
  <div className="spacer"></div>
  <div className="spacer"></div>
  <img src="./assets/NITMUN11.jpg" alt="NITMUN" />
  <img src="./assets/NITMUN12.jpg" alt="NITMUN" />
  <img src="./assets/NITMUN13.jpg" alt="NITMUN" />
  <div className="spacer"></div>
  <img src="./assets/DSC_0054.jpg" alt="NITMUN" />
  <img src="./assets/DSC_0631.jpg" alt="NITMUN" />
</article>
</div>
        </>
    )
}

export default GalleryComp;