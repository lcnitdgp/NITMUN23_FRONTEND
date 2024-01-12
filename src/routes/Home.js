import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Commitees from "../components/Commitees";
import Navbar from "../components/Navbar";


function Home () {
    return(
        <>
        <Navbar/>
        <Hero />
        <Commitees border = "5px solid rgb(56, 56, 48)" />
        <Footer />
        </>
    )
}

export default Home;