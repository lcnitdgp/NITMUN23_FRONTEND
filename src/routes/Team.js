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
        <Commitees />
        <TeamCards />
        <Footer />
        </>
    )
}

export default Team;