import  React, { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import Loader from "./Loader";
import "./Loader.css";
import Team from "./Team";

const TeamPage = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);
    return (
        <div className="App">
          {loading ? (
            <div className="ring-style">
              <Loader loading={loading} /> {/* use your custom loader */}
            </div>
          ) : (
            <Team/>
          )}
        </div>
      );
    };
  
  export default TeamPage;