import React from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Component/Navbar";
import Home from './Component/Pages/Home'
import Contact from "./Component/Pages/Contact";
function App() {
  
  return (
    <>
       <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
   
    </>
  );
}

export default App;
