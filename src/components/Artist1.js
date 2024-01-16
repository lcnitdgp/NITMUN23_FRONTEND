import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'
import './Artist.css';
import { useState, useEffect } from 'react';

  const Artist1 = (props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

      return (
        <div className="artist-section" id="artistSection">
          <div className="artist-content" style={{order: isMobile ? 2 : props.orderContent}}>
            <span className="pf-200 "> <span className="pf-400" style={{fontSize: '2rem'}}>{props.comnumber}</span>{" "}{" "}{props.comshorttext}</span>
            {/* <Fade duration={700} top cascade> */}
              <span className="pf-200 section-heading " style={{fontSize: '2.2rem'}}>{props.comfulltext}</span>
            {/* </Fade> */}
            <Slide bottom>
              <p className="pf-200 about">
            {props.comparatext}
              </p>
            </Slide>
            <div className='commitee-btn-container'>
            <div className='commitee-btn'>
            <a className="guide-button "  href={props.studyguide} download>Study Guide</a> {/* Add this line */}
            </div>
            <div className='commitee-btn'>
        <a className="matrix-button" href={props.portfolio} download>Portfolio Matrix</a> {/* Add this line */}
        </div>
        </div>
          </div>
          <div className="artist-image" style={{order: isMobile ? 1 : props.orderImage}}>
            <img src={props.imagesrc} alt="Top view"/>
          </div>
        </div>
      );
    };

    export default Artist1;