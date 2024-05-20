import React, { useEffect, useState } from 'react';
import '../../Styles/Stat/StatCard.css';

function StatCard({ number, description }) {
  const [displayedNumber, setDisplayedNumber] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const handleScroll = () => {
    const element = document.getElementById(`statCard-${description}`);
    if (element) {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
      setIsInView(isVisible);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(number, 10);
      const duration = 2000;
      const incrementTime = 10; 
      const totalIncrements = duration / incrementTime;
      const incrementValue = end / totalIncrements;

      const incrementNumber = () => {
        start += incrementValue;
        if (start >= end) {
          setDisplayedNumber(end);
        } else {
          setDisplayedNumber(Math.ceil(start));
          setTimeout(incrementNumber, incrementTime);
        }
      };

      incrementNumber();
    }
  }, [isInView, number]);

  return (
    <div className='statCardContainer' id={`statCard-${description}`}>
      <div className="statCardNumber_div">
        <h1 className='statCardNumber'>{displayedNumber}</h1>
      </div>
      <div className="statCardDescription_div">
        <h3 className='statCardDescription'>{description}</h3>
      </div>
    </div>
  );
}

export default StatCard;
