import React from 'react'
import '../../Styles/Footer/FooterSocialMedia.css'
import facebookIcon from '../../assests/Footer/faceBookIcon.png'
import instergramIcon from '../../assests/Footer/instergramIcon.png'
import linkedinIcon from '../../assests/Footer/linkdeinIcon.jpeg'
import twitterIcon from '../../assests/Footer/twitterIcon.jpeg'
import whatsappIcon from '../../assests/Footer/whatsappIcon.png'

function FooterSocialMedia() {
  return (
    <div className='footerSocialMediaContainer'>
        <div className="facebook_div">
            <img src={facebookIcon} alt="facebookIcon" />
        </div>
        <div className="whatsapp_div">
            <img src={whatsappIcon} alt="whatsappIcon" />
        </div>
        <div className="instergram_div">
            <img src={instergramIcon} alt="instergramIcon" />
        </div>
        <div className="linkedin_div">
            <img src={linkedinIcon} alt="linkedinIcon" />
        </div>
        <div className="twitter_div">
            <img src={twitterIcon} alt="twitterIcon" />
        </div>
    </div>
  )
}

export default FooterSocialMedia