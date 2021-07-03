import axios from 'axios';
import React,{useEffect,useState} from 'react'
import { useHistory } from 'react-router-dom';
import './ListeUsers.css'
import Navbar from '../Navbar'


export default function ListeUsers({data}) {

    const [values,setValues] = useState([{
        FirstName :'',
        LastName :'',
        Cin :'',
        Phone_Number :	'',
        Email :'',
        Occupation :'',
        Password :''
    }])
    const [filter,setFilter]=useState([])

    const [show,setShow]=useState(false)
    const [update,setUpdate]=useState('Update')
    const [NewFirstName,setNewFirstName] = useState(values.FirstName)
    const [NewLastName,setNewLastName] = useState(values.LastName)
    const [NewCin,setNewCin] = useState(values.Cin)
    const [NewPhone_Number,setNewPhone_Number] = useState(values.Phone_Number)
    const [NewEmail,setNewEmail] = useState(values.Email)
    const [NewOccupation,setNewOccupation] = useState(values.Occupation)
    const [NewPassword,setNewPassword] = useState(values.Password)
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState(null)
    const dataList = search.length > 0 ? searchResult : values;
    const history = useHistory();
    
    


    

    
     useEffect(data=>{
        axios.get('http://localhost:3001/app/liste').then(res =>{
           const users = res.data;
           var w = [{}]
           var v = [{}]
           var j=0
          for(var i=0;i<users.length;i++){
               w = users[i]
               
               if (w.FirstName!='null') {
                   v[j] = w
                   j++
                   console.log(v)

               }
              
          }
          console.log(v)
          setValues(v)

          console.log(users.length)
            
            
        })
    } ,[])  
    
    const deleteUser = (_id) =>{
        axios.delete(`http://localhost:3001/app/liste/${_id}`)
            .then(response =>{
                
                if(response.data !== null){
                    alert('deleted successfully',refreshPage(true))
                }
            })

    }
    function refreshPage() {
        window.location.reload(false);
      }
      const updateUser = (_id) =>{
          if(update==='Update'){
          setUpdate('Finish Update')
          setShow(true)
        }else{
            setUpdate('Update')
            setShow(false)
            axios.put(`http://localhost:3001/app/liste/${_id}`,{
                FirstName :  NewFirstName,
                LastName :  NewLastName,
                Cin : NewCin,
                Phone_Number : NewPhone_Number,
                Email : NewEmail,
                Occupation	: NewOccupation,
                Password : NewPassword,

        })
        .then(response =>{
                
            if(response.data !== null){
                alert('updated successfully',refreshPage(true))
            }
        })
        }
          
      }
      
      const updateSearch = value =>{
          setSearch(value)
      }

      
    
  

      useEffect(()=>{
        const searchedList = values.filter(item=>
            item.Cin.toLowerCase().includes(search)
        )
        setSearchResult(searchedList);
        console.log(searchedList)

    },[values,search])
    return (
        <>
        <Navbar />
        <div>
            <input type='text'className='search' placeholder='search' style={{color:'black'}}  value={search} onChange={e=>{updateSearch(e.target.value)}}  />
            
        </div>
        <table cellPadding={16} cellSpacing={16}  data={dataList} >
            <thead >
                <td >FirstName</td>
                <td >LastName</td>
                <td >Cin</td>
                <td >Phone_Number</td>
                <td >Email</td>
                <td >Occupation</td>
                <td >Password</td>
                <td >Date</td>
                <td >Actions</td>
            </thead>
            <tbody  >
            
            <tr >
                
            {show?<td className='input-fonts'><input type='text' pattern='[A-Za-z]{3,30}' placeholder='set new FirstName' value={values.FirstName} onChange={(e)=>setNewFirstName(e.target.value)} style={{color:'black'}}  /></td>:null }
            {show?<td className='input-fonts'><input type='text' pattern='[A-Za-z]{3,30}' placeholder='set new LastName' value={values.LastName} onChange={(e)=>setNewLastName(e.target.value)} style={{color:'black'}} /></td>:null }                
            {show?<td className='input-fonts'><input type='text' pattern='^(1|0)[0-9]{7}' placeholder='set new Cin' value={values.Cin} onChange={(e)=>setNewCin(e.target.value)} style={{color:'black'}} /></td>:null }                
            {show?<td className='input-fonts'><input type='text' pattern='^(2|3|4|5|7|9)[0-9]{7}' placeholder='set new phone number' value={values.Phone_Number} onChange={(e)=>setNewPhone_Number(e.target.value)} style={{color:'black'}} /></td>:null }                
            {show?<td className='input-fonts'><input type='text'  placeholder='set new Email'value={values.Email} onChange={(e)=>setNewEmail(e.target.value)} style={{color:'black'}} /></td>:null }
            {show?<td className='input-fonts'><input type='text'placeholder='set new Occupation' value={values.Occupation} onChange={(e)=>setNewOccupation(e.target.value)} style={{color:'black'}}/></td>:null }
            {show?<td className='input-fonts'><input type='text' minlength="9" maxlength="12" placeholder='set new password' value={values.Password} onChange={(e)=>setNewPassword(e.target.value)} style={{color:'black'}}/></td>:null }
            </tr>
            
                {dataList.map(data=><tr>
                    <td style={{color:'black'}}>{data.FirstName}</td>
                    <td style={{color:'black'}}>{data.LastName}</td>
                    <td style={{color:'black'}}>{data.Cin}</td>
                    <td style={{color:'black'}}>{data.Phone_Number}</td>
                    <td style={{color:'black'}}>{data.Email}</td>
                    <td style={{color:'black'}}>{data.Occupation}</td>
                    <td style={{color:'black'}}>{data.Password}</td>
                    <td style={{color:'black'}}>{data.date}</td>
                    <td cellSpacing={5}>
                       <input type='submit'className='button' onClick={()=>updateUser(data._id)} style={{color:'black'}} value={update} onChange={()=>updateUser} />
                        <button onClick={()=>deleteUser(data._id)} style={{color:'black'}}><span>Delete</span></button>
                    </td>

                </tr>)}
            </tbody>
        </table>
        </>
    )   
}
