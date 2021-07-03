import axios from 'axios';
import React,{useEffect,useState} from 'react'
import Navbarusers from '../Navbarusers'
import './ClientList.css'
import Pdf from 'react-to-pdf'
import Button from 'react-bootstrap/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Document,Page} from 'react-to-pdf'
import Modal from '@material-ui/core/Modal';

const ref = React.createRef();


export default function ClientsList(data) {

    const [values,setValues] = useState([{
        Nom_client :'',
        N_Série :'',
        Nom_Technicien:''
        
    }])
    const [filter,setFilter]=useState([])
    const [shows,setShows]=useState(false)
    const [q, setQ] = useState('')
    const [searchResult, setSearchResult] = useState(null)

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
    const dataList = q.length > 0 ? searchResult : values;
    const [show, setShow] = useState(false);
    const [currentId,setCurrentId]=useState('');

  
   



    


    

    
     useEffect(data=>{
        axios.get('http://localhost:3001/app/liste').then(res =>{
           const clients = res.data
           setValues(clients)
        })
    } ,[])  
    
    
      
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
            setShow(true)
          }else{
              setUpdate('Update')
              setShow(false)
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
        const updateSearch = value =>{
            setQ(value)
        }
    
       
       
        function getModalStyle() {
            const top = 50;
            const left = 50  ;
            

          
            return {
              top: `${top}%`,
              left: `${left}%`,
              transform: `translate(-${top}%, -${left}%)`,
              color:'black'
            };
          }
          
          const useStyles = makeStyles((theme) => ({
            paper: {
              position: 'absolute',
              width: '800px',
              backgroundColor: theme.palette.background.paper,
              border: '2px solid #000',
              boxShadow: theme.shadows[5],
              padding: theme.spacing(2, 4, 3),
              height:'auto',
              overflow:'auto',
            },
          }));
        const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [simpleClient, setSimpleClient]=useState([{}])
  useEffect(()=>{
    handleUploadClient();
    return ()=>{ setSimpleClient({})}
},[])
  const  handleUploadClient =  (_id) => {
    
    axios.get(`http://localhost:3001/app/liste`).then(res=>{
      const c =res.data
      var w = [{}]
      var v = [{}]
      var j=0
     for(var i=0;i<c.length;i++){
          w = c[i]
          
          if (w.Nom_client!='null') {
              v[j] = w
              j++
              console.log(v)

          }
         
     }

     
        setSimpleClient(v)

        console.log(simpleClient)
    }) 
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const changeClient = e =>{
    var id  = e
    setCurrentId(id)
    console.log(id)
  }

  const body = (
    <div style={modalStyle} className={classes.paper} data={data}>
      <h2 style={{color:'black'}} id="simple-modal-title">{data.Nom_client}</h2>
      <Pdf targetRef={ref} filename="code-example.pdf">
        
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        
      </Pdf>
      
      {
        
       simpleClient.map(e=>{
         if(currentId===e._id){
         return<span ref={ref}>
           <p style={{color:'black'}}>id:{e._id}</p>
           <p style={{color:'black'}}>Nom_client:{e.Nom_client}</p>
           <p style={{color:'black'}}>Tél_client:{e.Tél_client}</p>
           <p style={{color:'black'}}>Proprieter_du_véhicule:{e.Proprieter_du_véhicule}</p>
           <p style={{color:'black'}}>Tél_Proprieter:{e.Tél_Proprieter}</p>
           <p style={{color:'black'}}>Lieu_intervention:{e.Lieu_intervention}</p>
           <p style={{color:'black'}}>Marque_et_Type_du_Véhicule:{e.Marque_et_Type_du_Véhicule}</p>
           <p style={{color:'black'}}>Immatriculation:{e.Immatriculation}</p>
           <p style={{color:'black'}}>Compteur_KM_Véhicule:{e.Compteur_KM_Véhicule}</p>
           <p style={{color:'black'}}>Model_du_Groupe:{e.Model_du_Groupe}</p>
           <p style={{color:'black'}}>N_Série:{e.N_Série}</p>
           <p style={{color:'black'}}>Compteur_KM_Véhicule:{e.Compteur_KM_Véhicule}</p>
         </span> }})
      }
      
        
      
    </div>
  )
      
    
  


    return (
        <>
        <Navbarusers />
        <div >
            <input type='text'className='search' placeholder='search' style={{color:'black'}}  value={q} onChange={e=>{updateSearch(e.target.value)}}  />
        </div>
        
        
        <table cellPadding={50} cellSpacing={50} data={dataList} style={show===true ?{width:'80%'} : null}>
            <thead >
                <td >Nom client</td>
                <td >N Série</td>
                <td >Nom technicien</td>
                <td >Date</td>
                <td >Pdf</td>
            </thead>
            <tbody>
                <tr >
                {show?<td><input className='Update-input' type='text' value={data.Nom_client} onChange={(e)=>setNewNom_client(e.target.value)}  /></td>:null }
                {show? <td><input className='Update-input' type='text' value={data.Tél_client} onChange={(e)=>setNewTél_client(e.target.value)}  /></td>:null }
                {show?<td><input className='Update-input' type='text' value={data.Proprieter_du_véhicule} onChange={(e)=>setNewProprieter_du_véhicule(e.target.value)} /></td>:null }
                {show?<td><input className='Update-input' type='text' value={data.Tél_Proprieter} onChange={(e)=>setNewTél_Proprieter(e.target.value)}/></td>:null }
                {show?<td><input className='Update-input' type='text' value={data.Lieu_intervention}  onChange={(e)=>setNewLieu_intervention(e.target.value)} /></td>:null }
                {show?<td><input className='Update-input' type='text' value={data.Marque_et_Type_du_Véhicule} onChange={(e)=>setNewMarque_et_Type_du_Véhicule(e.target.value)}  /></td>:null }
                {show?<td><input className='Update-input' type='text' value={data.Immatriculation}  onChange={(e)=>setNewImmatriculation(e.target.value)} /></td>:null }
                {show?<td><input className='Update-input' type='text' value={data.Compteur_KM_Véhicule} onChange={(e)=>setNewCompteur_KM_Véhicule(e.target.value)}  /></td>:null }
                {show?<td><input className='Update-input' type='text' value={data.Model_du_Groupe} onChange={(e)=>setNewModel_du_Groupe(e.target.value)}  /></td>:null }
                {show?<td><input className='Update-input' type='text' value={data.N_Série} onChange={(e)=>setNewN_Série(e.target.value)} /></td>:null }
                {show?<td><input className='Update-input' type='text' value={data.Compteur_Horaire_Groupe}  onChange={(e)=>setNewCompteur_Horaire_Groupe(e.target.value)}  /></td>:null }
               
                 </tr>
                 
                {dataList.map(data=>
                
                <tr   onClick={()=>changeClient(data._id)} >
                    <td style={{color:'black'}} >{data.Nom_client}</td>
                     <td style={{color:'black'}}>{data.N_Série}</td>
                     <td style={{color:'black'}}>{data.Nom_Technicien}</td>
                     <td style={{color:'black'}}>{data.date}</td>
                     <td cellSpacing={5}>
                            <input type='submit'className='button' onClick={()=>updateClient(data._id)} style={{color:'black'}} value={update} onChange={()=>updateClient} />
                            <button onClick={()=>deleteClient(data._id)} style={{color:'black'}}><span>Delete</span></button>
                            <button type="button" onClick={()=>{handleUploadClient(data._id);handleOpen();changeClient(data._id)}}  data={data}>Open Modal</button>
                        </td>
                </tr>)}
            </tbody>
           
        </table>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={{overflowY:'scroll',height:'1100px'}}
      >
        {body}
      </Modal>
        </>
    )   
}

