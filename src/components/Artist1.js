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
            <span className="lato-400 "> <span className="pf-400" style={{fontSize: '2rem'}}>{props.comnumber}</span>{" "}{" "}{props.comshorttext}</span>
            {/* <Fade duration={700} top cascade> */}
              <span className="pf-200 section-heading " style={{fontSize: '2.2rem'}}>{props.comfulltext}</span>
            {/* </Fade> */}
            <Slide bottom>
              <p className="lato-400 about">
            {props.comparatext}
              </p>
            </Slide>
            <div className='commitee-btn-container'>
            <div className='commitee-btn'>
            <a className="guide-button "  href="https://www.un.org/en/pdfs/18-00159e_un_system_chart_17x11_4c_en_web.pdf" download>Study Guide</a> {/* Add this line */}
            </div>
            <div className='commitee-btn'>
        <a className="matrix-button" href="https://www.un.org/en/pdfs/18-00159e_un_system_chart_17x11_4c_en_web.pdf" download>Portfolio Matrix</a> {/* Add this line */}
        </div>
        </div>
          </div>
          <div className="artist-image" style={{order: isMobile ? 1 : props.orderImage}}>
            <img src="./assets/p2.jpg" alt="Top view"/>
          </div>
        </div>
      );
    };

    export default Artist1;