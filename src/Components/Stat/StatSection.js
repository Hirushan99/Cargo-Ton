import React from 'react';
import StatCard from '../../Components/Stat/StatCard';
import '../../Styles/Stat/StatSection.css';

function StatSection() {

  return (
    <div className='statSectionContainer'>
        <div className="statCard_1">
            <StatCard number = "890"  description = "Delivered Packages"/>
        </div>
        <div className="statCard_2">
            <StatCard number = "137"  description = "Countries Covered"/>
        </div>
        <div className="statCard_3">
            <StatCard number = "740"  description = "Tons of Goods"/>
        </div>
        <div className="statCard_4">
            <StatCard number = "600"  description = "Satisfied Clients"/>
        </div>
    </div>
  )
}

export default StatSection