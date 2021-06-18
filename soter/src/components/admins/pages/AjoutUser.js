import React,{useState} from 'react'
import './AjoutUser.css'
import axios from 'axios'





const AjoutUser = () =>{

  const [val,setVal]=useState({
    Username_Admin:'null',
    mdp:'null',
    FirstName :'',
    LastName :'',
    Cin :'',
    Phone_Number :'',
    Email :'',
    Occupation :'',
    Password :'',
    Nom_client:'null',
    Marque_et_Type_du_Véhicule:'null',
    Tél_client:'null',
    Immatriculation:'null',
    Proprieter_du_véhicule:'null',
    Compteur_KM_Véhicule:'null',
    Tél_Proprieter:'null',
    Model_du_Groupe:'null',
    Lieu_intervention:'null',
    N_Série:'null',
    Compteur_Horaire_Groupe:'null'

 
  });

  const Change = e =>{
    const{name,value}= e.target
    setVal({...val, [name]:value})
  }
  const Submit = e =>{
    
    e.preventDefault();
    alert('SAVED IN DATABASE');

        const Valider = {
            Username_Admin : val.Username_Admin,
            mdp : val.mdp,
            FirstName : val.FirstName,
            LastName :val.LastName,
            Cin :val.Cin,
            Phone_Number :val.Phone_Number,
            Email :	val.Email,
            Occupation :val.Occupation,
            Password :val.Password,
            Nom_client : val.Nom_client,
            Tél_client :val.Tél_client,
            Proprieter_du_véhicule :val.Proprieter_du_véhicule,
            Tél_Proprieter :val.Tél_Proprieter,
            Lieu_intervention :	val.Lieu_intervention,
            Marque_et_Type_du_Véhicule :val.Marque_et_Type_du_Véhicule,
            Immatriculation :val.Immatriculation,
            Compteur_KM_Véhicule :val.Compteur_KM_Véhicule,
            Model_du_Groupe :val.Model_du_Groupe,
            N_Série :val.N_Série,
            Compteur_Horaire_Groupe :val.Compteur_Horaire_Groupe

        }
        axios.post('http://localhost:3001/app/admin', Valider)
            .then(response => console.log(response.data))
            console.log(Valider)
  };


    return(
        
        <div className='form-content-right'>
            
            <form className='form' onSubmit={Submit}>
                <h1>Get Started !!!!!! Create User account by filling out the information below.</h1>
                <div className='form-inputs'>
                    <label htmlFor='First_name' className='form-label'>
                    First Name
                    </label>
                    <input id='FirstName' type='text' name='FirstName' className='form-input' placeholder='First Name' value={val.FirstName} onChange={Change} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='LastName' className='form-label'>
                    Last Name
                    </label>
                    <input id='LastName' type='text' name='LastName' className='form-input' placeholder='Last Name' value={val.LastName} onChange={Change} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='CIN' className='form-label'>
                    CIN
                    </label>
                    <input id='CIN' type='text' name='Cin' className='form-input' placeholder='CIN' value={val.Cin} onChange={Change} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='Phone_Number' className='form-label'>
                    Phone Number
                    </label>
                    <input id='Phone_Number' type='text' name='Phone_Number' className='form-input' placeholder='Phone Number' value={val.Phone_Number} onChange={Change} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='Occupation' className='form-label'>
                    Occupation
                    </label>
                    <input id='Occupation' type='text' name='Occupation' className='form-input' placeholder='Occupation' value={val.Occupation} onChange={Change} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                       Email
                    </label>
                    <input id='email' type='email' name='Email' className='form-input' placeholder='Enter your email' value={val.Email} onChange={Change} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>
                        Password
                    </label>
                    <input id='password' type='password' name='Password' className='form-input' placeholder='Enter your Password' value={val.Password} onChange={Change} />
                </div>
                <button className='form-input-btn' type='submit' >Create</button>
               
                
            </form>    
        </div>
    )
}


export default AjoutUser