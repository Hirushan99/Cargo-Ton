import React from 'react';
import EmployeeNumberBox from '../../Components/Welcome/EmployeeNumberBox';
import WelcomeText from '../../Components/Welcome/WelcomeText';
import '../../Styles/Welcome/Welcome.css';
import logcompletingImg from '../../assests/Welcome/logcompleting.jpg';
import trollyImg from '../../assests/Welcome/trolly.jpeg';


function Welcome() {
  return (
    <div className='welcomeContainer'>
        <div className="trollyImg_div">
        <img src={trollyImg} alt="trollyImg" />
        </div>
        <div className="logCompletingImg_div">
        <img src={logcompletingImg} alt="logcompletingImg" />
        </div>
        <div className='employeeNumberBox_div'><EmployeeNumberBox/></div>
        <div className="welcomeText_div"><WelcomeText/></div>
    </div>
  )
}


export default Welcome