import React from 'react'
import '../../Styles/Footer/FooterAboutUs.css'
import locationIcon from '../../assests/Footer/locationIcon.jpeg'
import telephoneIcon from '../../assests/Footer/telephoneIcon.jpg'

function FooterAboutUs() {
  return (
    <div className='footerAboutUsContainer'> 
        <div className="footerAboutUsHeading_div">
            <h3 className='footerAboutUsHeading'>About Us</h3>
        </div>
        <div className="footerAboutUsHorizontalLine_div">

        </div>
        <div className="footerAboutUsSubHeading_div">
            <span className='footerAboutUsSubHeading'>
                Lorem ipsum dolor slt amet, consectetur adipiscing elit.
            </span>
        </div>
        <div className="footerPhoneDetails_div">
            <div className="footerPhoneImg_div">
                <img src={telephoneIcon} alt="Telephone Icon" />
            </div>
            <div className="footerPhoneverticalLine"></div>
            <div className="footerPhoneNumber">
                <span>(+94) 11 434 7575</span>
            </div>
        </div>
        <div className="footerMapDetails_div">
        <div className="footerMapImg_div">
                <img src={locationIcon} alt="Telephone Icon" />
            </div>
            <div className="footerPhoneverticalLine"></div>
            <div className="footerMapAddress">
                <span>42 Lily Ave, Colombo 00600 </span>
            </div>
        </div>
    </div>
  )
}

export default FooterAboutUs