import React, { useEffect, useState } from 'react';
import '../../Styles/Welcome/EmployeeNumberBox.css';

function EmployeeNumberBox() {
  const [displayedNumber, setDisplayedNumber] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const targetNumber = 15350;

  const handleScroll = () => {
    const element = document.getElementById('employeeNumberBox');
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
      const end = targetNumber;
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
  }, [isInView]);

  return (
    <div className="dialog-box" id="employeeNumberBox">
      <div className="content">
        <h1 className='employeeNumber'>{displayedNumber.toLocaleString()}+</h1>
        <h3 className='employeeNumberContent'>Clients Worldwide</h3>
      </div>
    </div>
  );
}

export default EmployeeNumberBox;
