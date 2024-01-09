import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'
import './Artist.css';

const Artist2 = () => {

      return (
        <div className="artist-section" id="artistSection">
            <div className="artist-image">
            <img src="./assets/p2.jpg" alt="Top view"/>
          </div>
          <div className="artist-content">
            <span className="lato-400"> <span className="pf-400" style={{fontSize: '2rem'}}>01</span> NITMUN</span>
            <Fade duration={700} top cascade><span className="pf-200 section-heading " style={{fontSize: '3rem'}}>SPECPOL</span></Fade>
            <Slide bottom>
              <p className="lato-400 artist">
              Deliberation upon the conflict in the Syrian region along with its impact on the socio-political conditions and western relations, with special emphasis on seeking ways to de-escalate the situation.
              </p>
            </Slide>
          </div>
        </div>
      )
    }

    export default Artist2;