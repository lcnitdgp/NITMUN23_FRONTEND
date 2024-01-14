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
        <Commitees comname="About NITMUN" number="01" numbertext="NITMUN" commimage="./assets/nitmun11logo.png" textone="NITMUN is a forum convened by the members of the Literary Circle for discussion and analysis of global issues. It seeks to bring out motivated delegates from all over the country for brainstorming and discussing over significant international issues.
NITMUN promises a challenging yet a very entertaining time to all delegates."  texttwo=" Our greatest goal is to make sure that each delegate learns how to tackle world issues better at the end of the conference as the world is in dire need of young leaders now.
Currently in its 12th edition, NITMUN has been extremely successful in providing the perfect experience to each delegate. Over the years, we have entertained more than 1000 delegates in total. Delegates arrive from all corners of India for an experience they will never forget."/>
        <Artist1 orderContent={2} orderImage={1} comnumber="02" comshorttext="UNSC" comparatext ="Deliberation on the military crisis in Sudan with emphasis on the human rights violations and the use of weapons of mass destruction." comfulltext="United Nations Security Council" />
        <Artist1 orderContent={1} orderImage={2} comnumber="03" comshorttext="UNGA" comparatext ="Deliberation upon the violation of Taiwan's territorial rights by China by emphasising upon social tensions over identity, democracy and humanitarian worries stemming from potential instability." comfulltext="United Nations General Assembly" />
        <Artist1 orderContent={2} orderImage={1} comnumber="04" comshorttext = "AIPPM" comparatext ="Discussing the crisis in Manipur with emphasis on communal violence and violation of Suspension of Operations Agreement and legislating ways to restore peace." comfulltext="All India Political Parties Meet"/>
        <Footer /> 
        </>
    )
}

export default About;