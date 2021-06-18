import React from 'react'
import './FormClient.css'
import './AddClient.css'
import Im from './photos/Thermo_King-logo-B8A45042FC-seeklogo.com.png'
import AddClient from './AddClient'



const FormClient =()=>{




  return(
    <>
      <div className='form-container'>
        <span className='close-btn'>x</span>
        <div className='form-content-left'>
          <img src={Im} alt='' className='form-img' />
        </div>
        
          <AddClient />
          
      </div>
    
    </>
  )
}
export default FormClient 