import React from 'react'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <section className='w-100 Navbar'>
        <div className=' container'>
         <div className='d-flex justify-content-between align-items-center m-auto'>
          <nav>
            <ul className={showMediaIcons ? "navbar-ul ul navbar-mobile" :'navbar-ul ul'}>
              <li className='d-inline-block mx-4 my-2'><NavLink activeclassname="active" className='text-decoration-none' to="/">Home</NavLink></li>
              <li className='d-inline-block mx-4 my-2'><NavLink activeclassname="active" className='text-decoration-none' to="/about">About</NavLink></li>
              <li className='d-inline-block mx-4 my-2'><NavLink activeclassname="active" className='text-decoration-none' to="/Service">Service</NavLink></li>
              <li className='d-inline-block mx-4 my-2'><NavLink activeclassname="active" className='text-decoration-none' to="/blog">Blog</NavLink></li>
              <li className='d-inline-block mx-4 my-2'><NavLink activeclassname="active" className='text-decoration-none' to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
            <div className='hamburger-menu' onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <i className="fa-solid fa-bars"></i>
            </div>
          <div className=' d-flex contact-btn'>
            <button className=' btn btn-primary'>Contact Us</button>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Navbar