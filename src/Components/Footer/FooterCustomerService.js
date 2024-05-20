import React from 'react'
import FooterCustomerSingleService from '../../Components/Footer/FooterCustomerSingleService'
import '../../Styles/Footer/FooterCustomerService.css'

function FooterCustomerService() {
  return (
    <div className='footerCustomerServiceContainer'>
      <div className="footerCustomerServiceHeading_div">
            <h3 className='footerCustomerServiceHeading'>Customer Service</h3>
        </div>
        <div className="footerCustomerServiceHorizontalLine_div">

        </div>
        <div className="customerServiceSection_div">
            <div>
              <FooterCustomerSingleService footerService="Support Forums"/>
              <FooterCustomerSingleService footerService="Communication"/>
              <FooterCustomerSingleService footerService="FAQS"/>
              <FooterCustomerSingleService footerService="Privacy Policy"/>
              <FooterCustomerSingleService footerService="Rules & Conditions"/>
              <FooterCustomerSingleService footerService="Contact Us"/>
            </div>
        </div>
    </div>
  )
}

export default FooterCustomerService