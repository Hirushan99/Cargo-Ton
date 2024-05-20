import React from 'react';
import '../../Styles/Footer/FooterCustomerServiceImg.css';
import footerServiceImg1 from '../../assests/Footer/footerServiceImg1.jpeg';
import footerServiceImg2 from '../../assests/Footer/footerServiceImg2.jpeg';
import footerServiceImg3 from '../../assests/Footer/footerServiceImg3.jpeg';
import footerServiceImg4 from '../../assests/Footer/footerServiceImg4.jpeg';
import footerServiceImg5 from '../../assests/Footer/footerServiceImg5.jpeg';
import footerServiceImg6 from '../../assests/Footer/footerServiceImg6.jpeg';

function FooterCustomerServiceImg() {
  return (
    <div className='footerCustomerServiceImgContainer'>
      <div className="footerCustomerServiceImgHeading_div">
        <h3 className='footerCustomerServiceImgHeading'>Customer Service</h3>
      </div>
      <div className="footerCustomerServiceImgHorizontalLine_div"></div>
      <div className="footerCustomerServiceImgSection">
        <div className="footerCustomerServiceImg_1">
          <img src={footerServiceImg1} alt="footerServiceImg1" />
        </div>
        <div className="footerCustomerServiceImg_2">
          <img src={footerServiceImg2} alt="footerServiceImg2" />
        </div>
        <div className="footerCustomerServiceImg_3">
          <img src={footerServiceImg3} alt="footerServiceImg3" />
        </div>
        <div className="footerCustomerServiceImg_4">
          <img src={footerServiceImg4} alt="footerServiceImg4" />
        </div>
        <div className="footerCustomerServiceImg_5">
          <img src={footerServiceImg5} alt="footerServiceImg5" />
        </div>
        <div className="footerCustomerServiceImg_6">
          <img src={footerServiceImg6} alt="footerServiceImg6" />
        </div>
      </div>
    </div>
  );
}

export default FooterCustomerServiceImg;
