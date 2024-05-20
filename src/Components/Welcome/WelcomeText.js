import React from 'react'
import '../../Styles/Welcome/WelcomeText.css'

function WelcomeText() {
  return (
    <div className='welcomeTextContainer'>
        <div className="welcomeText_topic_div">
        <h1 className='welcomeText_topic'>
            TransMax Logistics <br/>Around <span className='worldWord'>the World</span>
        </h1>
        </div>
        <div className="welcomeText_text1_div">
            <span className='welcomeText_text1'>
            Transmix is the world's driving worldwide coordinations supplier. We uphold industry and exchange the worldwide trade of merchandise through land transport.
            </span>
        </div>
        <div className="welcomeText_text2_div">
            <span className='welcomeText_text2'>
            Our worth added administrations guarantee the progression of products proceeds consistently and supply chains stay learn and streamlined for progress. 
            </span>
        </div>
        <div className="moreButton_div">
            <button>MORE ABOUT US</button>
        </div>
    </div>
  )
}

export default WelcomeText