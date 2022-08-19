import './App.scss';
import 'react-slideshow-image/dist/styles.css'
import Home from './pages/home.js';
import Navbar from './components/Navbar'
import Spaceship from './pages/spaceship'
import Contact from './pages/contact'
import Security from './pages/security'
import Trips from './pages/trips'
import Gallery from './pages/gallery'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className='App'>
 <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="spaceship" element={<Spaceship/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="security" element={<Security/>}/>
      <Route path="trips" element={<Trips/>}/>
      <Route path="gallery" element={<Gallery/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
