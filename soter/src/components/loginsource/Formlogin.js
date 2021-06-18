import React,{useState} from 'react'
import axios from 'axios'
import './Formlogin.css'
import {Link, useHistory} from 'react-router-dom'





const Formlogin = ({data}) =>{

    

    const [values,setValues]=useState({
        username :'',
        password:''
    });
    const history = useHistory();

    const handleChange = e =>{
        const{name,value}= e.target
        setValues({...values, [name]:value})
    };
    const handleSubmit = e =>{
        e.preventDefault();
        axios.get('http://localhost:3001/app/liste').then(res =>{
            const Soterdata = res.data;
            console.log(Soterdata)
            var cin =[]
            cin =Soterdata.map(data=>{
                const Username = data.Cin
                console.log(Username)
                return Username

            })
            console.log(cin)
            console.log(cin.length)
            var Password =[]
            Password =Soterdata.map(data=>{
                const Password = data.Password
                console.log(Password)
                return Password

            })
            console.log(Password)
            console.log(Password.length)
            var Username_Admin =[]
            Username_Admin =Soterdata.map(data=>{
                const Username_Admin = data.Username_Admin
                console.log(Username_Admin)
                return Username_Admin

            })
            console.log(Username_Admin)
            console.log(Username_Admin.length)
            var mdp =[]
            mdp =Soterdata.map(data=>{
                const mdp = data.mdp
                console.log(mdp)
                return mdp

            })
            console.log(mdp)
            console.log(mdp.length)
            for (var i=0;i<cin.length;i++){
                if((values.username===cin[i]&&values.password===Password[i])){
                    var v = 1
                    break
               
                } else if((values.username===Username_Admin[i]&&values.password===mdp[i])) {
                    v=2
                    break
                }else{
                    v=0
                }
                
            }
            if(v==1){
                history.push('/users')
            }else if (v==2){
                history.push('/admin')
            }else{
                alert('wrong')
            }
        
          
           

        }) };
   
        
      


    return(
        
        <div className='form-content-right'>
            
            <form className='form' >
                <h1>Get Started !!!!!! Enter to your account by filling out the information below.</h1>
                <div className='form-inputs'>
                    <label htmlFor='username' className='form-label'>
                        username
                    </label>
                    <input id='username' type='text' name='username' className='form-input' placeholder='Enter your username' value={values.username} onChange={handleChange} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='password' className='form-label'>
                        Password
                    </label>
                    <input id='password' type='password' name='password' className='form-input' placeholder='Enter your Password' value={values.password} onChange={handleChange}  />
                </div>
               
                    <button className='form-input-btn' type='submit' onClick={handleSubmit} >Log In</button>
               
                
                
                
            </form>    
        </div>
    )
}


export default Formlogin