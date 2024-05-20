import React from 'react';
import '../../Styles/Testimonials/DoubleArrowButton.css';
import leftSideArrow from '../../assests/Testimonials/leftSideArrow.jpeg';
import rightSideArrow from '../../assests/Testimonials/rightSideArrow.jpeg';

function DoubleArrowButton({ onNext, onPrevious }) {
  return (
    <div className='doubleArrowButtonContainer'>
      <button className="leftArrowImage_div" onClick={onPrevious}>
        <img src={leftSideArrow} alt="LeftSideArrow" />
      </button>
      <button className="rightArrowImage_div" onClick={onNext}>
        <img src={rightSideArrow} alt="RightSideArrow" />
      </button>
    </div>
  );
}

export default DoubleArrowButton;
