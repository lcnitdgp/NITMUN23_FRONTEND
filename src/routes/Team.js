import React from "react";
import TeamCards from "../components/TeamMembers";
import Commitees from "../components/Commitees";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
 

function Team () {
    return(
        <>
        <Navbar/>
        <div className="about-gap"></div>
        <Commitees comname="About Literary Circle" number=" " numbertext={"LITERARY CIRCLE"} commimage="./assets/lcgrpimg.jpeg" textone="Literary Circle is the club in NIT Durgapur, which gives the college an extra dimension of creative expression in the midst of technical unilateralism and gives the students of the college an opportunity to transcend the ordinary and mundane. The Literary Circle conducts various events throughout the year." texttwo="
The club is known to be highly selective in its admission of new members, with only about 10-15 students inducted out of the entire batch of 900 each year. Great believers of the phrase ‘quality over quantity’, the members selected every year are the best of the best in the field of expression and creativity." />
        <TeamCards/>
        <Footer />
        </>
    )
}

export default Team;