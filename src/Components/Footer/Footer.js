import React from 'react'
import FooterAboutUs from '../../Components/Footer/FooterAboutUs'
import FooterCustomerService from '../../Components/Footer/FooterCustomerService'
import FooterCustomerServiceImg from '../../Components/Footer/FooterCustomerServiceImg'
import FooterLatestNews from '../../Components/Footer/FooterLatestNews'
import FooterSocialMedia from '../../Components/Footer/FooterSocialMedia'
import '../../Components/Footer/FooterUpperPart'
import FooterUpperPart from '../../Components/Footer/FooterUpperPart'
import '../../Styles/Footer/Footer.css'

function Footer() {
  return (
    <div className='footerContainer'>
        <div className='footerUpperPart'>
            <FooterUpperPart/>
        </div>
        <div className="footerAboutUs">
            <FooterAboutUs/>
        </div>
        <div className="footerLatestNews">
            <FooterLatestNews/>
        </div>
        <div className="footerCustomerService">
            <FooterCustomerService/>
        </div>
        <div className="footerCustomerServiceImg">
            <FooterCustomerServiceImg/>
        </div>
        <div className="footerSocialMedia">
            <FooterSocialMedia/>
        </div>
        <div className="footerText_div">
            <span className='footerText'>
            Copyright &copy; 2021 All Rights Reserved. Site By Xiteb
            </span>
        </div>
    </div>
  )
}

export default Footer