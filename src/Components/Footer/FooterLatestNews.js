import React from 'react'
import FooterSingleNews from '../../Components/Footer/FooterSingleNews'
import '../../Styles/Footer/FooterLatestNews.css'

function FooterLatestNews() {
  return (
    <div className='footerLatestNewsContainer'>
        <div className="footerLatestNewsHeading_div">
            <h3 className='footerLatestNewsHeading'>Latest News</h3>
        </div>
        <div className="footerLatestNewsHorizontalLine_div">

        </div>
        <div className="newsSection_div1">
           <FooterSingleNews singleNews ="Sed ut perspiclatis omnis iste natus error slt voluptatem." singleNewsTime="5"/>
        </div>
        <div className="newsSection_div2">
            <FooterSingleNews singleNews ="Sed ut perspiclatis omnis iste natus error slt voluptatem." singleNewsTime="10"/>
        </div>
    </div>
  )
}

export default FooterLatestNews