import React, { useEffect, useState } from 'react';
import '../../Styles/Navbar/Navbar.css';
import logo from "../../assests/Navbar/cargotonlogo.jpg";

function Navbar() {
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop < lastScrollTop) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${isScrollingUp ? 'visible' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className='gap'></div>
      <div className="columns">
        <div className="nav-column">
          HOME
          <div className="dropdown-content">
            <a href="#home1">Home 1</a>
            <a href="#home2">Home 2</a>
          </div>
        </div>
        <div className="nav-column">
          PAGES
          <div className="dropdown-content">
            <a href="#page1">Page 1</a>
            <a href="#page2">Page 2</a>
          </div>
        </div>
        <div className="nav-column">
          TRACKING
          <div className="dropdown-content">
            <a href="#track1">Track 1</a>
            <a href="#track2">Track 2</a>
          </div>
        </div>
        <div className="nav-column">
          SERVICES
          <div className="dropdown-content">
            <a href="#service1">Service 1</a>
            <a href="#service2">Service 2</a>
          </div>
        </div>
        <div className="nav-column">
          BLOG
          <div className="dropdown-content">
            <a href="#blog1">Blog 1</a>
            <a href="#blog2">Blog 2</a>
          </div>
        </div>
      </div>

      <div className='buttons'> 
        <button className='btn1'>GET A QUOTE</button>
        <button className='btn2'>SIGN IN</button>
      </div>
    </div>
  );
}

export default Navbar;
