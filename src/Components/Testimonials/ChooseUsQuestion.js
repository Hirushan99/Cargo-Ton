import React from 'react'
import '../../Styles/Testimonials/ChooseUsQuestion.css'
import plusMark from '../../assests/Testimonials/plusMark.jpeg'

function ChooseUsQuestion({ qText }) {


  return (
    <div className='chooseUsQuestionContainer'>
        <div className="chooseUsQuestion_div">
            <span className='chooseUsQuestion'>
                {qText}
            </span>
        </div>
        <button className="chooseUsQuestionImg_div">
            <img src={plusMark} alt="plusIcon" />
        </button>
    </div>
  )
}

export default ChooseUsQuestion