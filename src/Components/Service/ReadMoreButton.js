import React from 'react'
import '../../Styles/Service/ReadMoreButton.css'
import arrowImage from '../../assests/Service/arrowIcon.jpeg'

function ReadMoreButton() {
  return (
    <button className='readMoreButtonContainer'>
        <div className="arrowImage_div">
        <img src={arrowImage} alt="Arrow_Logo" />
        </div>
        <div className="readMoreText_div">
            <span className='readMoreText'>READ MORE</span>
        </div>
    </button>
  )
}

export default ReadMoreButton