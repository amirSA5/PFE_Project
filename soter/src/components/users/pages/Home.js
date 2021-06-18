import React from 'react'
import Img1 from './photos/Thermo_King-logo-B8A45042FC-seeklogo.com.png'




export default function Home() {
    return (
        <>
          <div className="Home">
          <div className='textalign'>
                     <p>Société Tunisienne d’Équipement</p>
                             <p>de Refrigeration</p>
             </div>
            <div className='logo'>
                 <img src={Img1} alt='' />
                 
               
            </div >

            
            
          </div>  
        </>
    )
}

