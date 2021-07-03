import axios from 'axios';
import React,{useEffect,useState} from 'react'
import Navbar from '../Navbar'



export default function ClientsList(data) {

    const [values,setValues] = useState([{
        Nom_client :'',
        Tél_client :'',
        Proprieter_du_véhicule :'',
        Tél_Proprieter :'',
        Lieu_intervention :	'',
        Marque_et_Type_du_Véhicule :'',
        Immatriculation :'',
        Compteur_KM_Véhicule :'',
        Model_du_Groupe :'',
        N_Série :'',
        Compteur_Horaire_Groupe :''
    }])
    const [filter,setFilter]=useState([])
    const [show,setShow]=useState(true)
    const [q, setQ] = useState('')
    const [searchResult, setSearchResult] = useState(null)
    const dataList = q.length > 0 ? searchResult : values;

    
    


    

    
     useEffect(data=>{
        axios.get('http://localhost:3001/app/liste').then(res =>{
           const clients = res.data
           console.log(clients)
           const amir = res.data
           
             
            var w = [{}]
            var v = [{}]
            var j=0
           for(var i=0;i<amir.length;i++){
                w = amir[i]
                
                if (w.Nom_client!='null') {
                    v[j] = w
                    j++
                    console.log(v)

                }
               
           }
           console.log(v)
           setValues(v)

           console.log(amir.length)
        
           
           
        })
    } ,[])  
    
    const updateSearch = value =>{
        setQ(value)
    }

    useEffect(()=>{
        const searchedList = values.filter(item=>
            item.Tél_client.toLowerCase().includes(q)
        )
        setSearchResult(searchedList);
        console.log(searchedList)

    },[values,q])
      
    
  


    return (
        <>
        <Navbar />
        <div>
            <input type='text'className='search' placeholder='search' style={{color:'black'}}  value={q} onChange={e=>{updateSearch(e.target.value)}}  />
        </div>
        
        
        <table cellPadding={50} cellSpacing={50} data={dataList}>
            <thead >
                <td >Nom client</td>
                <td >Tél client</td>
                <td >Proprieter du véhicule</td>
                <td >Tél Proprieter</td>
                <td >Lieu intervention</td>
                <td >Marque et Type du Véhicule</td>
                <td >Immatriculation</td>
                <td >Compteur KM Véhicule</td>
                <td >Model du Groupe</td>
                <td >N Série</td>
                <td >Compteur Horaire Groupe</td>
                <td >Date</td>
            </thead>
            <tbody>
                {dataList.map(data=>
                <tr>
                   {show? <td style={{color:'black'}} >{data.Nom_client}</td>:null}
                   {show?<td style={{color:'black'}}>{data.Tél_client}</td>:null}
                    {show?<td style={{color:'black'}}>{data.Proprieter_du_véhicule}</td>:null}
                    {show? <td style={{color:'black'}}>{data.Tél_Proprieter}</td>:null}
                    {show? <td style={{color:'black'}}>{data.Lieu_intervention}</td>:null}
                    {show? <td style={{color:'black'}}>{data.Marque_et_Type_du_Véhicule}</td>:null}
                    {show?<td style={{color:'black'}}>{data.Immatriculation}</td>:null}
                    {show? <td style={{color:'black'}}>{data.Compteur_KM_Véhicule}</td>:null}
                    {show?<td style={{color:'black'}}>{data.Model_du_Groupe}</td>:null}
                    {show?<td style={{color:'black'}}>{data.N_Série}</td>:null}
                    {show?<td style={{color:'black'}}>{data.Compteur_Horaire_Groupe}</td>:null}
                    {show?<td style={{color:'black'}}>{data.date}</td>:null}
                </tr>)}
            </tbody>
           
        </table>
        
        </>
    )   
}
