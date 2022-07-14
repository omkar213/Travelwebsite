import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Component/Navbar";
import Home from './Component/Pages/Home'
import Blog from "./Component/Pages/Blog";
import Contact from "./Component/Pages/Contact";
import AboutUSsection from './AboutUS-section';
import Contectsection from './Contect-section';
import Servicesection from './Service-section';
import Footersection from './Footer-section';
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <Servicesection></Servicesection>
      <AboutUSsection></AboutUSsection>
      <Contectsection></Contectsection>
      <Footersection></Footersection>
    </>
  );
}

export default App;
