import React from 'react'
import Clients from '../Components/Clients/Clients'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import News from '../Components/News/News'
import Services from '../Components/Service/Services'
import Slider from '../Components/Slider/Slider'
import StatSection from '../Components/Stat/StatSection'
import Testimonials from '../Components/Testimonials/Testimonials'
import Welcome from '../Components/Welcome/Welcome'
import '../Styles/CargoTon.css'

function CargoTon() {
  return (
    <div className='cargoTonContainer'>
        <div className="cargoTonNavbar">
            <Navbar/>
        </div>
        <div className="cargoTonSlider">
            <Slider/>
        </div>
        <div className="cargotonWelcome">
            <Welcome/>
        </div>
        <div className="cargotonService">
            <Services/>
        </div>
        <div className="cargotonStatSection">
            <StatSection/>
        </div>
        <div className="cargoTonTestimonials">
            <Testimonials/>
        </div>
        <div className="cargoTonClients">
            <Clients/>
        </div>
        <div className="cargoTonNews">
            <News/>
        </div>
        <div className="cargoTonFooter">
            <Footer/>
        </div>
    </div>
  )
}

export default CargoTon