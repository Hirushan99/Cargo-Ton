import React from 'react'
import ChooseUs from '../../Components/Testimonials/ChooseUs'
import TrustedClient from '../../Components/Testimonials/TrustedClient'
import '../../Styles/Testimonials/Testimonials.css'

function Testimonials() {
  return (
    <div className='testimonialsContainer'>
        <div className="trustClient_div">
            <TrustedClient/>
        </div>
        <div className="chooseUs_div">
            <ChooseUs/>
        </div>
        
    </div>
  )
}

export default Testimonials