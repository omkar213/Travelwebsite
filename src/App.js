import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Component/Navbar";
import Home from './Component/Pages/Home'
import Blog from "./Component/Pages/Blog";
import Contact from "./Component/Pages/Contact";
import AboutUSsection from './Component/Pages/AboutUS-section';
import Servicesection from './Component/Pages/Service-section';
import Footer from "./Component/Footer";
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/service' element={<Servicesection />} />
        <Route exact path='/about' element={<AboutUSsection />} />
        {/* <Route exact path='/footer' element={<Footer />} /> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
