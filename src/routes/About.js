import React, { useLayoutEffect } from "react";
import Commitees from "../components/Commitees";
import  Artist1 from "../components/Artist1";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About( ) {
 

    return(
        <>
             <Navbar/>
             <div className="about-gap"></div>
        <Commitees comname="About NITMUN" number=" " numbertext="NITMUN" commimage="./assets/munlogo12.png" textone="NITMUN is a forum convened by the members of the Literary Circle for discussion and analysis of global issues. It seeks to bring out motivated delegates from all over the country for brainstorming and discussing over significant international issues.
NITMUN promises a challenging yet a very entertaining time to all delegates."  texttwo=" Our greatest goal is to make sure that each delegate learns how to tackle world issues better at the end of the conference as the world is in dire need of young leaders now.
Currently in its 12th edition, NITMUN has been extremely successful in providing the perfect experience to each delegate. Over the years, we have entertained more than 1000 delegates in total. Delegates arrive from all corners of India for an experience they will never forget."/>
        <Artist1 orderContent={2} orderImage={1} imagesrc = "./assets/about_images/unga_poster.png" studyguide="./assets/Unga_specpol_sg.pdf" portfolio="./assets/UNGA_PM.pdf" comnumber="01" comshorttext="UNGA" comparatext ="Deliberation upon the violation of Taiwan's territorial rights by China by emphasising upon social tensions over identity, democracy and humanitarian worries stemming from potential instability." comfulltext="United Nations General Assembly" />
        <Artist1 orderContent={1} orderImage={2} imagesrc = "./assets/about_images/unsc_poster.png" studyguide="./assets/UNSC_study_guide.pdf" portfolio="./assets/UNSC_PORTFOLIO_MATRIX.pdf"comnumber="02" comshorttext="UNSC" comparatext ="Deliberation on the military crisis in Sudan with emphasis on the human rights violations and the use of weapons of mass destruction." comfulltext="United Nations Security Council" />
        <Artist1 orderContent={2} orderImage={1} imagesrc = "./assets/about_images/aippm_poster.jpg" studyguide="./assets/AIPPM_STUDY_GUIDE.pdf" portfolio="./assets/AIPPM_PORTFOLIO_MATRIX.pdf"comnumber="03" comshorttext = "AIPPM" comparatext ="Discussing the crisis in Manipur with emphasis on communal violence and violation of Suspension of Operations Agreement and legislating ways to restore peace." comfulltext="All India Political Parties Meet"/>
        <Artist1 orderContent={1} orderImage={2} imagesrc = "./assets/about_images/ip_poster.jpg" studyguide="./assets/IP_study_guide.pdf" portfolio="./assets/IP_portfolio_Matrix.pdf" comnumber="04" comshorttext="IP" comparatext ="Presenting to you an independent body, comprising of fearless reporters who with their thorough research, well-placed questions and detailed reports, uncover the hidden truth." comfulltext="International Press" />
        <Footer /> 
        </>
    )
}

export default About;