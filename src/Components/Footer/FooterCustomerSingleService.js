import React from 'react'
import '../../Styles/Footer/FooterCustomerSingleService.css'
import rightSideHandSymbol from '../../assests/Footer/rightSideHandSYmbol.jpg'

function FooterCustomerSingleService({footerService}) {
  return (
    <div className=' footerCustomerSingleServiceContainer'>
      <div className="footerCustomerSingleServiceImg_div">
          <img src={rightSideHandSymbol} alt="Service Icon" />
      </div>
      <div className="footerCustomerSingleServiceText_div">
        <span>{footerService}</span>
      </div>
    </div>
  )
}

export default FooterCustomerSingleService