import React, { useState } from 'react';
import DoubleArrowButton from '../../Components/Testimonials/DoubleArrowButton';
import '../../Styles/Testimonials/TrustedClient.css';

const quotesData = [
  {
    quote: "Integer congue elit non semper laoreet sed lectus orci posuer nisi tempor se felis ac mauris. Pelentesque inyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam.Aliquam malesuada maurs etug met Curabitur laoreet convallis nisal pellentesque bibendum.",
    author: "JOHN DEO",
    post: "Managing Director"
  },
  {
    quote: "Curabitur laoreet convallis nisl, pellentesque bibendum magna viverra ac. Suspendisse potenti. Nulla facilisi. Integer vitae felis vel magna posuere vestibulum.",
    author: "JANE SMITH",
    post: "CEO"
  },
  {
    quote: "Aliquam malesuada mauris et ligula dictum, nec convallis nisl consectetur. Praesent ut erat a elit interdum sodales et eget ligula.",
    author: "MICHAEL BROWN",
    post: "Chief Operations Officer"
  }
];

function TrustedClient() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % quotesData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + quotesData.length) % quotesData.length);
  };

  const { quote, author, post } = quotesData[currentIndex];

  return (
    <div className='trustedClientContainer'>
      <div className="trustedClientHeader_div">
        <h2 className='trustedClientHeader'>
          TRUSTED CLIENTS
        </h2>
      </div>
      <div className="trustedClientSubHeader_div">
        <h5 className='trustedClientSubHeader'>
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR
        </h5>
      </div>
      <div className="quotes_div">
        <span className='quotes'>{quote}</span>
      </div>
      <div className="doubleSideArrowImg_div">
        <DoubleArrowButton onNext={handleNext} onPrevious={handlePrevious} />
      </div>
      <div className='author_and_post_div'>
      
        <span className='quotesAuthor'>{author}</span><br/><span className='quotesAuthorPost'>{post}</span>
      
      </div>
    </div>
  );
}

export default TrustedClient;
