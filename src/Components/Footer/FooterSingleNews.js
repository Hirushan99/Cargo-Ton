import React from 'react'
import '../../Styles/Footer/FooterSingleNews.css'

function FooterSingleNews({singleNews,singleNewsTime}) {
  return (
    <div className='footerSingleNewsContainer'>
        <div className="footerSingleNews_div">
            <span>{singleNews}</span>
        </div>
        <div className="footerTime_div">
            <span>{singleNewsTime} minutes ago</span>
        </div>
    </div>
  )
}

export default FooterSingleNews