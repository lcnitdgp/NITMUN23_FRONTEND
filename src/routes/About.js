import React, { useLayoutEffect } from "react";
import Commitees from "../components/Commitees";
import Artist2 from "../components/Artist2";
import  Artist1 from "../components/Artist1";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About( ) {
 

    return(
        <>
             <Navbar/>
             <div className="about-gap"></div>
        <Commitees comname="About NITMUN" />
        <Artist1 orderContent={2} orderImage={1} />
        <Artist1 orderContent={1} orderImage={2} />
        <Artist1 orderContent={2} orderImage={1} />
        <Footer />
        </>
    )
}

export default About;