import React from 'react'
import ServicesCard from '../../Components/Service/ServicesCard'
import '../../Styles/Service/Services.css'
import planeBirdEyeView from '../../assests/Service/planeBirdEyeView.jpg'
import shipBirdEyeView from '../../assests/Service/shipBirdEyeView.jpeg'

function Services() {
  return (
    <div className='ServicesContainer'>
        <div className="serviceContainerSubHeading_div">
            <h4 className='serviceContainerSubHeading'> REAL SOLUTION, REAL FAST !</h4>
        </div>
        <div className='serviceContainerHeading_div'>
            <h1 className='serviceContainerHeading'>BEST GLOBAL LOGISTICS SOLUTIONS. </h1>
        </div>
        <div className='serviceCard_1'>
            <ServicesCard
                header="Air Freight Services"
                imgSrc={shipBirdEyeView}
                text="At our Auto Services garage, we are fully appreciate how difficult occur it is people to find." 
            />
        </div>
        <div className='serviceCard_2'>
            <ServicesCard
                header="Drone Services"
                imgSrc={planeBirdEyeView}
                text="These are unique and often they differ from one industry to the other.Our logostics expertise."
            />
        </div>
    </div>
  )
}

export default Services