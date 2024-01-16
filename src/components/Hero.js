import { Link } from 'react-router-dom';
import "./HeroStyles.css";
import TimerComp from "../components/timercomp"; // Fix the casing of the file name

function Hero () {
  return(
    <>
     <div className="hero-container">
     <div className='mobile-hero-gap'><h1>The clock<br />is <span>ticking</span>.</h1></div>
     <div><p>Resolution through Diplomacy<br />not Ideology</p></div>
     <div><TimerComp/></div>
     <div><Link to="/register" className="register-button pf-200">Register</Link> </div>
     <div className="bg"></div>
     </div>
    </>
  )
}

export default Hero;