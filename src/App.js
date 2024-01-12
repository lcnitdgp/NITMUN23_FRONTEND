import './App.css';
import {Route , Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './routes/Home';
import About from './routes/About';
import Gallery from './routes/Gallery';
import Team from './routes/Team';
import Register from './routes/Register';

function App() {
  return (
     <div className='App'>
      
       <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/about' element={<About/>}/> 
        <Route path = '/gallery' element={<Gallery/>}/> 
        <Route path = '/team' element={<Team/>}/> 
        <Route path = '/register' element={<Register/>}/>  
       </Routes>

     </div>
  );
}

export default App;
