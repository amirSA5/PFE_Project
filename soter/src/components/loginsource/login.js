import React from 'react'
import Formlogin from './Formlogin'
import './Formlogin.css'
import './login.css'
import Im from '../images/1600162028282.jpg'

const Login =()=>{




    return(
      <>
        <div className='form-container'>
          <span className='close-btn'>x</span>
          <div className='form-content-left'>
            <img src={Im} alt='' className='form-img' />
          </div>
          
            <Formlogin />
            
        </div>
      
      </>
    )
  }
  
  
  
  
  
  export default Login