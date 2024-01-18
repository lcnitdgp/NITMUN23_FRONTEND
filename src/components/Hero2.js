import { Link } from 'react-router-dom';
import "./HeroStyles.css";
import TimerComp from "./timercomp"; // Fix the casing of the file name

function Hero2 () {
  return(
    <>
     <div className="hero-container">
     <div className='mobile-hero-gap'><h1>Coming <span> Soon..</span>.</h1></div>
     <div><p>Resolution through Diplomacy, not Ideology<br />NITMUN XII</p></div>
     <div><p>As we set the stage ready for you,<br />have a sneak-peek into this year's commitees in the About Page</p></div>
     <div><Link to="/about" className='register-button pf-200' >About</Link></div>
      
     <div className="bg"></div>
     </div>
    </>
  )
}

export default Hero2;