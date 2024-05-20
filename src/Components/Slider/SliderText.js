import React from 'react';
import '../../Styles/Slider/SliderText.css';

function SliderText({ text }) {
  return (
    <div className='container'>
      <div className='logistic_div'>
      <div class="vertical-line"></div>
      <div>
      <span className='logistics'>LOGISTICS</span>
      </div>
      </div>
      <div className='title1_div'>
        <h1 className='title1'>{text.title1}</h1>
      </div>
      <div className='title2_div'>
      <h1 className='title2'>{text.title2}</h1>
      </div>
      <div className='description_div'>
        <span>{text.description}</span>
        </div>
        <div className='Discover-More_button_div'>
          <button className='Discover-More_button'>Discover More</button>
        </div>
      
    </div>
  );
}

export default SliderText;
