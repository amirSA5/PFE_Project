import React from 'react'

export default function AjoutProduit() {
    return (
        
             <div className='form-content-right'>
            
            <form className='form'  >
                <h1>Get Started !!!!!! ADD Product  by filling out the information below.</h1>
                <div className='form-inputs'>
                    <label htmlFor='First_name' className='form-label'>
                        Product
                    </label>
                   
                    <input id='FirstName' type='text' pattern="[A-Za-z]{3,30}"  name='FirstName' className='form-input' placeholder='First Name'  />
                    
                </div>
                <div className='form-inputs'>
                    <label htmlFor='LastName' className='form-label'>
                        Number
                    </label>
                    
                    <input id='LastName' type='text' pattern="[A-Za-z]{3,30}" name='LastName' className='form-input' placeholder='Last Name'  />
                    </div>
                    </form>
                </div>

        
    )
}
