import React from 'react'
import './FormUser.css'
import './AjoutUser.css'
import Im from './photos/Thermo_King-logo-B8A45042FC-seeklogo.com.png'
import AjoutUser from './AjoutUser'
import Navbar from '../Navbar'


const FormUser =()=>{




  return(
    <>

      <div className='form-container'>
        <span className='close-btn'>x</span>
        <div className='form-content-left'>
          <img src={Im} alt='' className='form-img' />
        </div>
        
          <AjoutUser />
          
      </div>
    
    </>
  )
}
export default FormUser