import React,{useState} from 'react'
import './AjoutUser.css'
import axios from 'axios'
import validInfo from './Validinfo'





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
    Compteur_Horaire_Groupe:'null',
    travaille:'null'

 
  });
  const [errors,setErrors]=useState({})
  const [isSubmitting,setIsSubmitting] = useState(false)


  const Change = e =>{
    const{name,value}= e.target
    setVal({...val, [name]:value})
  }
  const handleSubmit = e =>{
        
    e.preventDefault();
   

};
  const Submit = e =>{
    e.preventDefault();

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
            Compteur_Horaire_Groupe :val.Compteur_Horaire_Groupe,
            travaille:val.travaille

        }
        
        axios.post('http://localhost:3001/app/admin', Valider)
            .then(response => console.log(response.data))
            console.log(Valider)

  };
  
  const validator = e =>{
    setErrors(validInfo(val));
  }


    return(
        
        <div className='form-content-right'>
            
            <form className='form' onChange={(e)=>handleSubmit} onSubmit={Submit} >
                <h1>Get Started !!!!!! Create User account by filling out the information below.</h1>
                <div className='form-inputs'>
                    <label htmlFor='First_name' className='form-label'>
                    First Name
                    </label>
                    {errors.FirstName &&<p>{errors.FirstName}</p>}
                    <input id='FirstName' type='text' pattern="[A-Za-z]{3,30}"  name='FirstName' className='form-input' placeholder='First Name' value={val.FirstName} onChange={Change} onBlur={validator} />
                    
                </div>
                <div className='form-inputs'>
                    <label htmlFor='LastName' className='form-label'>
                    Last Name
                    </label>
                    {errors.LastName &&<p>{errors.LastName}</p>}
                    <input id='LastName' type='text' pattern="[A-Za-z]{3,30}" name='LastName' className='form-input' placeholder='Last Name' value={val.LastName} onChange={Change} onBlur={validator} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='CIN' className='form-label'>
                    CIN
                    </label>
                    {errors.Cin &&<p>{errors.Cin}</p>}
                    <input id='CIN' type='text' pattern="^(1|0)[0-9]{7}" name='Cin' className='form-input' placeholder='CIN' value={val.Cin} onChange={Change} onBlur={validator} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='Phone_Number' className='form-label'>
                    Phone Number
                    </label>
                    {errors.Phone_Number &&<p>{errors.Phone_Number}</p>}
                    <input id='Phone_Number' type='text' pattern="^(2|3|4|5|7|9)[0-9]{7}" name='Phone_Number' className='form-input' placeholder='Phone Number' value={val.Phone_Number} onChange={Change} onBlur={validator} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='Occupation' className='form-label'>
                    Occupation
                    </label>
                    {errors.Occupation &&<p>{errors.Occupation}</p>}
                    <input id='Occupation' type='text' name='Occupation' className='form-input' placeholder='Occupation' value={val.Occupation} onChange={Change} onBlur={validator} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                       Email
                    </label>
                    <input id='email' type='email' name='Email' className='form-input' placeholder='Enter your email' value={val.Email} onChange={Change} onBlur={validator} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>
                        Password
                    </label>
                    {errors.Password &&<p>{errors.Password}</p>}
                    <input id='password' type='password' minlength="9" maxlength="12" name='Password' className='form-input' placeholder='Enter your Password' value={val.Password} onChange={Change} onBlur={validator} />
                </div>
                <button className='form-input-btn' type='submit' >Create</button>
               
                
            </form>    
        </div>
    )
}


export default AjoutUser