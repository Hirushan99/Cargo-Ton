import React from 'react'
import ChooseUsQuestion from '../../Components/Testimonials/ChooseUsQuestion'
import '../../Styles/Testimonials/ChooseUs.css'

function ChooseUs() {
  return (
    <div className='chooseUsContainer'>
        <div className="chooseUsHeader_div">
        <h2 className='chooseUsHeader'>
          WHY CHOOSE US
        </h2>
      </div>
      <div className="chooseUsSubHeader_div">
        <h5 className='chooseUsSubHeader'>
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR
        </h5>
      </div>
      <div className="chooseUsQuestionSection_div">
        <div className="qText_1">
            <ChooseUsQuestion qText="Dui ac hendrerit elementum quam ipsum auctor lorem"/>
        </div>
        <div className="qText_2">
            <ChooseUsQuestion qText="Mauris vei magna a est lobortis volutpat"/>
        </div>
        <div className="qText_3">
            <ChooseUsQuestion qText="Sed bibendum ornare lorem mauris feugiat suspendisse neque"/>
        </div>
        <div className="qText_4">
            <ChooseUsQuestion qText="Nulla scelerisque dul hendrerit elementum quam"/>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs