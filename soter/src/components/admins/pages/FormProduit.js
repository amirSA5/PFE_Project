import React from 'react'
import './FormProduit.css'
import './AjoutProduit.css'
import Im from './photos/Thermo_King-logo-B8A45042FC-seeklogo.com.png'
import AjoutProduit from './AjoutProduit'
import Navbar from '../Navbar'


const FormProduit =()=>{




  return(
    <>
      <Navbar />
      <div className='form-container'>
        <span className='close-btn'>x</span>
        <div className='form-content-left'>
          <img src={Im} alt='' className='form-img' />
        </div>
        
          <AjoutProduit />
          
      </div>
    
    </>
  )
}
export default FormProduit