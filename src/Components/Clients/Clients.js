import React from 'react'
import '../../Styles/Clients/Clients.css'
import cognizantLogo from '../../assests/Clients/cognizantLogo.jpg'
import genesisLogo from '../../assests/Clients/genesisLogo.jpg'
import ingenicoLogo from '../../assests/Clients/ingenicoLogo.jpeg'
import nexusLogo from '../../assests/Clients/nexusLogo.jpeg'
import zaggLogo from '../../assests/Clients/zaggLogo.jpeg'

import ClientLogo from './ClientLogo'

function Clients() {
  return (
    <div className='clientsContainer'>
        <div className="clientsHeader_div">
            <h1>OUR CLIENTS</h1>
        </div>
        <div className="clientLogo_1">
            <ClientLogo Logosrc={nexusLogo}/>
        </div>
        <div className="clientLogo_2">
            <ClientLogo Logosrc={genesisLogo}/>   
        </div>
        <div className="clientLogo_3">
            <ClientLogo Logosrc={ingenicoLogo}/>
        </div>
        <div className="clientLogo_4">
            <ClientLogo Logosrc={cognizantLogo}/>
        </div>
        <div className="clientLogo_5">
            <ClientLogo Logosrc={zaggLogo}/>
        </div>
    </div>
  )
}

export default Clients