import React from 'react'
import '../../Styles/Clients/ClientLogo.css'


function ClientLogo({Logosrc}) {
  return (
    <div className='clientLogoContainer'>
        <img src={Logosrc} alt="Client Logo" />
    </div>
  )
}

export default ClientLogo