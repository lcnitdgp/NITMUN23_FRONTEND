import './App.css';
import {Route , Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './routes/Home';
import About from './routes/About';
import Gallery from './routes/Gallery';
import Team from './routes/Team';
import Register from './routes/Register';
import withLoader from "./components/Loader";
import HomePage from "./routes/Home1";

import {RingLoader} from "react-spinners";
import GalleryPage from './routes/Gallery1';
import AboutPage from './routes/About1';
import RegisterLoad from './routes/Register1';
import TeamPage from './routes/Team1';

function App() {

  return (
     <div className='App'>
      
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<GalleryPage />} /> 
        <Route path="/team" element={<TeamPage />} /> 
        <Route path="/register" element={<RegisterLoad />} />  
       </Routes>

     </div>
  );
}

export default App;
