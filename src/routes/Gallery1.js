import  React, { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import Loader from "./Loader";
import "./Loader.css";
import Gallery from "./Gallery";

const GalleryPage = () => {
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
            < Gallery/>
          )}
        </div>
      );
    };
  
  export default GalleryPage;