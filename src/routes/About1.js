import  React, { useState, useEffect } from "react";
import Home from "./Home";
import { RingLoader } from "react-spinners";
import Loader from "./Loader";
import "./Loader.css";
import About from "./About";

const AboutPage = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }, []);
    return (
        <div className="App">
          {loading ? (
            <div className="ring-style">
              <Loader loading={loading} /> {/* use your custom loader */}
            </div>
          ) : (
            <About />
          )}
        </div>
      );
    };
  
  export default AboutPage;