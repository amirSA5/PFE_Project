import React from 'react'
import './Home.css'
import Img1 from './photos/Thermo_King-logo-B8A45042FC-seeklogo.com.png'
import Navbar from '../Navbar'

export default function Home() {
    return (
        <>
          <Navbar />
          <div className="Home">
          <div  >
                     <span className="HomeTitle"><p>Société Tunisienne d’Équipement</p>
                             <p >de Refrigeration</p></span>
                            
             </div>
            <div className='logo'>
                 <img src={Img1} alt='' />
                 
               
            </div >

            
            
          </div>  
        </>
    )
}
