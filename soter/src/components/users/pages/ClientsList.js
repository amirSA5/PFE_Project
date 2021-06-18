import axios from 'axios';
import React,{useEffect,useState} from 'react'



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
    const [show,setShow]=useState(false)
    const [q, setQ] = useState("")
    const [update,setUpdate]=useState('Update')
    const [NewNom_client,setNewNom_client] = useState(data.Nom_client)
    const [NewTél_client,setNewTél_client] = useState(data.Tél_client)
    const [NewProprieter_du_véhicule,setNewProprieter_du_véhicule] = useState(data.Proprieter_du_véhicule)
    const [NewTél_Proprieter,setNewTél_Proprieter] = useState(data.Tél_Proprieter)
    const [NewLieu_intervention,setNewLieu_intervention] = useState(data.Lieu_intervention)
    const [NewMarque_et_Type_du_Véhicule,setNewMarque_et_Type_du_Véhicule] = useState(data.Marque_et_Type_du_Véhicule)
    const [NewImmatriculation,setNewImmatriculation] = useState(data.Immatriculation)
    const [NewCompteur_KM_Véhicule,setNewCompteur_KM_Véhicule] = useState(data.Compteur_KM_Véhicule)
    const [NewModel_du_Groupe,setNewModel_du_Groupe] = useState(data.Model_du_Groupe)
    const [NewN_Série,setNewN_Série] = useState(data.N_Série)
    const [NewCompteur_Horaire_Groupe,setNewCompteur_Horaire_Groupe] = useState(data.Compteur_Horaire_Groupe)
   

    


    

    
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
    
    
      function search(data){
        
        return data.filter(
            (data) => data.Nom_client.toLowerCase().indexOf(q)> -1); 
        }
        const deleteClient = (_id) =>{
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
          const updateClient = (_id) =>{
            if(update==='Update'){
            setUpdate('Finish Update')
            setShow(false)
          }else{
              setUpdate('Update')
              setShow(true)
              axios.put(`http://localhost:3001/app/liste/${_id}`,{
                Nom_client :  NewNom_client,
                Tél_client :  NewTél_client,
                Proprieter_du_véhicule : NewProprieter_du_véhicule,
                Tél_Proprieter : NewTél_Proprieter,
                Lieu_intervention : NewLieu_intervention,
                Marque_et_Type_du_Véhicule	: NewMarque_et_Type_du_Véhicule,
                Immatriculation : NewImmatriculation,
                Compteur_KM_Véhicule : NewCompteur_KM_Véhicule,
                Model_du_Groupe : NewModel_du_Groupe,
                N_Série : NewN_Série,
                Compteur_Horaire_Groupe : NewCompteur_Horaire_Groupe,
  
          })
          .then(response =>{
                  
              if(response.data !== null){
                  alert('updated successfully',refreshPage(true))
              }
          })
          }
            
        }

      
    
  


    return (
        <>
        <div>
            <input type='text'className='search' placeholder='search' style={{color:'black'}}  value={q} onChange={(e)=> setQ(e.target.value)}  />
        </div>
        
        
        <table cellPadding={50} cellSpacing={50}>
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
                <td>Action</td>
            </thead>
            <tbody>
                <tr>
                <td><input type='text' value={data.Nom_client} onChange={(e)=>setNewNom_client(e.target.value)} style={{color:'black'}} /></td>
                <td><input type='text' value={data.Marque_et_Type_du_Véhicule} onChange={(e)=>setNewMarque_et_Type_du_Véhicule(e.target.value)} style={{color:'black'}} /></td>
                <td><input type='text' value={data.Tél_client} onChange={(e)=>setNewTél_client(e.target.value)} style={{color:'black'}} /></td>
                <td><input type='text' value={data.Immatriculation}  onChange={(e)=>setNewImmatriculation(e.target.value)} style={{color:'black'}} /></td>
                <td><input type='text' value={data.Proprieter_du_véhicule} onChange={(e)=>setNewProprieter_du_véhicule(e.target.value)} style={{color:'black'}} /></td>
                <td><input type='text' value={data.Compteur_KM_Véhicule} onChange={(e)=>setNewCompteur_KM_Véhicule(e.target.value)} style={{color:'black'}} /></td>
                <td><input type='text' value={data.Tél_Proprieter} onChange={(e)=>setNewTél_Proprieter(e.target.value)} style={{color:'black'}}/></td>
                <td><input type='text' value={data.Model_du_Groupe} onChange={(e)=>setNewModel_du_Groupe(e.target.value)} style={{color:'black'}} /></td>
                <td><input type='text' value={data.Lieu_intervention}  onChange={(e)=>setNewLieu_intervention(e.target.value)} style={{color:'black'}} /></td>
                <td><input type='text' value={data.N_Série} onChange={(e)=>setNewN_Série(e.target.value)} /></td>
                <td><input type='text' value={data.Compteur_Horaire_Groupe}  onChange={(e)=>setNewCompteur_Horaire_Groupe(e.target.value)} style={{color:'black'}} /></td>
               
                 </tr>
                {values.map(data=>
                <tr>
                    <td style={{color:'black'}} >{data.Nom_client}</td>
                    <td style={{color:'black'}}>{data.Tél_client}</td>
                    <td style={{color:'black'}}>{data.Proprieter_du_véhicule}</td>
                     <td style={{color:'black'}}>{data.Tél_Proprieter}</td>
                     <td style={{color:'black'}}>{data.Lieu_intervention}</td>
                     <td style={{color:'black'}}>{data.Marque_et_Type_du_Véhicule}</td>
                     <td style={{color:'black'}}>{data.Immatriculation}</td>
                     <td style={{color:'black'}}>{data.Compteur_KM_Véhicule}</td>
                     <td style={{color:'black'}}>{data.Model_du_Groupe}</td>
                     <td style={{color:'black'}}>{data.N_Série}</td>
                     <td style={{color:'black'}}>{data.Compteur_Horaire_Groupe}</td>
                     <td style={{color:'black'}}>{data.date}</td>
                     <td cellSpacing={5}>
                            <input type='submit'className='button' onClick={()=>updateClient(data._id)} style={{color:'black'}} value={update} onChange={()=>updateClient} />
                            <button onClick={()=>deleteClient(data._id)} style={{color:'black'}}><span>Delete</span></button>
                        </td>
                </tr>)}
            </tbody>
           
        </table>
        
        </>
    )   
}
