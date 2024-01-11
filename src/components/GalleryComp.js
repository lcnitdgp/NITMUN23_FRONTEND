import React from "react";
import "./GalleryComp.css";

function GalleryComp () {
    return(
        <>
		<div className="gallery-body">
       <article className="gallery">
  <img src="./assets/NITMUN2.jpg" alt="guitar player at concert" />
  <blockquote className="quote spacer">
    <span>Without music, life would be a mistake.</span>
    <cite>&mdash;Friedrich Nietzsche</cite>
  </blockquote>
  <img src="./assets/NITMUN4.jpg" alt="duo singing" />
  <img src="./assets/NITMUN3.jpg" alt="crowd cheering" />
  <img src="./assets/NITMUN5.jpg" alt="singer performing" />
  <img src="./assets/NITMUN7.jpg" alt="singer fistbumping crowd" />
  <div className="spacer"></div>
  <img src="./assets/NITMUN8.jpg" alt="crowd cheering" />
  <img src="./assets/NITMUN9.jpg" alt="crowd in a concert" />
  <img src="./assets/NITMUN10.jpg" alt="woman singing" />
  <div className="spacer"></div>
  <div className="spacer"></div>
  <img src="./assets/NITMUN11.jpg" alt="Person playing a cello" />
  <img src="./assets/NITMUN12.jpg" alt="Kiss playing" />
  <img src="./assets/NITMUN13.jpg" alt="young man singing" />
  <div className="spacer"></div>
  <img src="./assets/NITMUN2.jpg" alt="woman singing" />
  <img src="./assets/NITMUN3.jpg" alt="man playing drums" />
</article>
</div>
        </>
    )
}

export default GalleryComp;