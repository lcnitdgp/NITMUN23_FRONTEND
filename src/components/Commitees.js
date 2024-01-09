import React from 'react'
import Slide from 'react-reveal'
import Fade from 'react-reveal/Fade'
import './Commitees.css';

const Commitees = () => {

      return (
        <div className="about-section" id="aboutSection">
          <div className="about-content">
            <span className="lato-400 small-lato"> <span className="pf-400" style={{fontSize: '15px'}}>01</span> NITMUN</span>
            <Fade duration={700} top cascade><span className="pf-200 section-heading " style={{fontSize: '3.1rem'}}>ABOUT LITERARY CIRCLE</span></Fade>
            <Slide bottom>
              <p className="lato-400 about">
              Literary Circle is the club in NIT Durgapur, which gives the college an extra. NITMUN is a forum convened by the members of the Literary Circle for discussion and analysis of global issues. It seeks to bring out motivated delegates from all over the country for brainstorming and discussing over significant international issues.
NITMUN promises a challenging yet a very entertaining time to all delegates.
              </p>
              <p className="lato-400 about">
              Our greatest goal is to make sure that each delegate learns how to tackle world issues better at the end of the conference as the world is in dire need of young leaders now.
Currently in its 11th edition, NITMUN has been extremely successful in providing the perfect experience to each delegate. Over the years, we have entertained more than 1000 delegates in total. Delegates arrive from all corners of India for an experience they will never forget.
              </p>
            </Slide>
          </div>
          <div className="about-image">
            <img src="./assets/nitmun11logo.png" alt="Top view"/>
          </div>
        </div>
      )
    }
    
export default Commitees;
