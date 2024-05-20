import React from 'react';
import '../../Styles/Footer/FooterUpperPart.css';

function FooterUpperPart() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='footerUpperPartContainer'>
      <div className="footerUpperPartHeader_div">
        <h1>Weekly Newsletter</h1> 
      </div>
      <div className="footerUpperPartSubHeader_div">
        <span>There are many variations of passages of lorem ipsum available.</span>
      </div>
      <div className="searchBox_div">
        <input type="text" className="searchBox" placeholder="Enter your mail" />
      </div>
      <button className='subscribeButton' onClick={handleScrollToTop}>SUBSCRIBE</button>
    </div>
  );
}

export default FooterUpperPart;
