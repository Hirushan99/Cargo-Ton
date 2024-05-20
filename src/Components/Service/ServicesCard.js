import React from 'react'
import ReadMoreButton from '../../Components/Service/ReadMoreButton'
import '../../Styles/Service/ServicesCard.css'

function ServicesCard({ header, imgSrc, text }) {
  return (
    <div className='ServicesCardContainer'>
        <div className="ServicesCardImg_div">
            <img src={imgSrc} alt="Service" />
        </div>
        <div className="ServicesCardHeader_div">
            <h3 className='ServicesCardHeader'>{header}</h3>
        </div>
        <div className="ServicesCardText_div">
            <span className='ServicesCardText'>{text}</span>
            </div>
        <div className="ReadMoreButton_div">
            <ReadMoreButton/>
        </div>
    </div>
  )
}

export default ServicesCard