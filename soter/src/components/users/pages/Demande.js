import React,{useState,useEffect} from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import GetStepContent from './FormClientDetails'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';


import TextareaAutosize from '@material-ui/core/TextareaAutosize'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
const useStyle = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function Demande() {
  const classes = useStyles();
  const classe = useStyle();
  const [state, setState] = React.useState({
    Moteur:'',
    Compteur:'',
    Filtre_a_eau:'',
    Thermostat:'',
    Compressuer:'',
    Condenseur:'',
    
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  
  
  const [section, setSection]=useState(false)
  const [show, setShow]=useState(false)
  
  
  const OrdredeMission = ()=>{
    setSection(true)
  }
  const Prestation =()=>{
    setShow(true)
  }
  const [val,setVal]=useState({
    Username_Admin:'null',
    mdp:'null',
    FirstName :'null',
    LastName :'null',
    Cin :'null',
    Phone_Number :'null',
    Email :'null',
    Occupation :'null',
    Password :'null',
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
    Descriptif_du_problème:'null',
    traveaux_demandé:'null',
    Observations_complémentaires:'null',
    Garentie:'Garentie',
    Nom_Technicien:'null',
    Diagnostique:'null',
    travaille_a_realisé:'null',
    Moteur:'null',
    Compteur:'null',
    Filtre_a_eau:'null',
    NFiltre_a_eau:2,
    Thermostat:'null',
    Compressuer:'null',
    Condenseur:'null',
    NCondenseur:2,
    begin:'null',
    Terminate:'null',
    avis_Client:'',
  });
  
  
  
  const Change = e =>{
    const{name,value}= e.target
    setVal({...val, [name]:value})
    
    console.log(e.target.value)
  }
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
            Descriptif_du_problème:val.Descriptif_du_problème,
            traveaux_demandé:val.traveaux_demandé,
            Observations_complémentaires:val.Observations_complémentaires,
            Garentie:val.Garentie,
            Nom_Technicien:val.Nom_Technicien,
            Diagnostique:val.Diagnostique,
            travaille_a_realisé:val.travaille_a_realisé,
            Moteur:val.Moteur,
            Compteur:val.Compteur,
            Filtre_a_eau:val.Filtre_a_eau,
            NFiltre_a_eau:val.NFiltre_a_eau,
            Thermostat:val.Thermostat,
            Compressuer:val.Compressuer,
            Condenseur:val.Condenseur,
            NCondenseur:val.NCondenseur,
            begin:val.begin,
            Terminate:val.Terminate,
            avis_Client:val.avis_Client,
        }
        
        axios.post('http://localhost:3001/app/admin', Valider)
            .then(response => console.log(response.data))
            
            console.log(Valider)
  };
  const [values,setValues] = useState([{
    N_Série :'',
}])
const [nSerie,setNSerie]=useState('')
const changeNSerie = e =>{
  const{name,value}= e.target
  setNSerie({...nSerie, [name]:value})
 
  console.log(e.target.value)

}

  useEffect(()=>{
       axios.get('http://localhost:3001/app/liste').then(response=>{
         response.data.N_Série==nSerie && setVal(response.data)
         console.log(val)
         setValues(response.data)
       } 
       )
      
    
  },[nSerie])  


     
    return (
      
        <React.Fragment>
        <Typography variant="h6" gutterBottom style={{color:'black'}}>
          Client information
        </Typography>
        <form onSubmit={Submit}>
        <Grid container spacing={3} >
          <Grid item xs={12} >
          <Select
          defaultValue={nSerie}
          native
          onChange={changeNSerie}
          inputProps={{
            name: 'N_Série',
            id: 'Moteur-native-simple',
          }}
        >
          
          {values.map(data=>{return <option style={{color:'black'}} value={data.N_Série} name={data.N_Série} >{data.N_Série}</option>})}
         
        </Select>
          </Grid>
          <Grid item xs={12}  >
            <TextareaAutosize
                style={{color:'black',
                        height:'90px',
                        width:'555px'}}
                name='Descriptif_du_problème'
                rowsMax={10}
                aria-label="maximum height"
                placeholder="Descriptif du problème"
                
                value={val.Descriptif_du_problème}
                onChange={Change}
                /> 
          </Grid>
          
          <Grid item xs={12}  >
            <TextareaAutosize
                style={{color:'black',
                        height:'90px',
                        width:'555px'}}
                name='traveaux_demandé'
                rowsMax={10}
                aria-label="maximum height"
                placeholder="traveaux demandé"
                
                value={val.traveaux_demandé}
                onChange={Change}
                
                /> 
          </Grid>
          <Grid item xs={12}  >
            <TextareaAutosize
                style={{color:'black',
                        height:'90px',
                        width:'555px'}}
                        name='Observations_complémentaires'
                rowsMax={10}
                aria-label="maximum height"
                placeholder=" Observations complémentaires"
                
                value={val.Observations_complémentaires}
                onChange={Change}
                

                /> 
          </Grid>
          <Grid item xs={12}  >
            <Checkbox
              color='primary'
              value='Garentie'
                /> 
               Sous Garentie
               <Checkbox
              color='primary'
              value='Sous_Garentie'
                /> 
                Hors Garentie
                <Checkbox
              color='primary'
              value='hors_Garentie'
                /> 
                Contrat de maintenance
          </Grid>
          <Grid item xs={12} >
            <TextField
              required
              id="Nom_Tech"
              name="Nom_Technicien"
              label="Nom Technicien"
              
              autoComplete="given-name"
              value={val.Nom_Technicien}
              onChange={Change}
              
            />
          </Grid>
         <button onClick={OrdredeMission}>next</button>
          
        </Grid>

        <React.Fragment>
        <Typography variant="h6" gutterBottom style={{color:'black'}}>
          
        </Typography>
        
        {section&&<span className='Ordre'>
        <h1 style={{color:'black'}}>Ordre de mission</h1>
        <Grid container spacing={3}>
          
          
          <Grid item xs={12}  >
            <TextareaAutosize
                style={{color:'black',
                        height:'90px',
                        width:'555px'}}
                rowsMax={10}
                aria-label="maximum height"
                placeholder="Diagnostique"
                name='Diagnostique'
                fullWidth
                value={val.Diagnostique}
                onChange={Change}

                /> 
          </Grid>
          <Grid item xs={12} >
          <TextareaAutosize
                style={{color:'black',
                        height:'90px',
                        width:'555px'}}
                rowsMax={10}
                aria-label="maximum height"
                placeholder="travaille a realisé"
                name='travaille_a_realisé'
                fullWidth
                value={val.travaille_a_realisé}
                onChange={Change}

                /> 
          </Grid>
          <div>
      <h2 style={{color:'black'}}>Materielle :</h2>
      <FormControl className={classe.formControl}>
        <InputLabel htmlFor="Moteur-native-simple">Moteur</InputLabel>
        <Select
          native
          value={val.Moteur}
          onChange={Change}
          inputProps={{
            name: 'Moteur',
            id: 'Moteur-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option style={{color:'black'}} value='thermoking' name='thermoking'>thermoking</option>
          <option style={{color:'black'}} value='intracon' name='intracon'>intracon</option>
          <option style={{color:'black'}} value='eutectic' name='eutectic'>eutectic</option>
          <option style={{color:'black'}} value='others' name='others'>others</option>
        </Select>
      </FormControl>
      <FormControl className={classe.formControl}>
        <InputLabel htmlFor="Compteur-native-helper">Compteur</InputLabel>
        <NativeSelect
          value={val.Compteur}
          onChange={Change}
          inputProps={{
            name: 'Compteur',
            id: 'Compteur-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option style={{color:'black'}} value='THL' name='THL'>THL</option>
          <option style={{color:'black'}} value='Ati' name='Ati'>Ati</option>
          <option style={{color:'black'}} value='SLV' name='SLV'>SLV</option>
          <option style={{color:'black'}} value='others' name='others'>others</option>
        </NativeSelect>
        
      </FormControl>
      <FormControl className={classe.formControl}>
      <InputLabel htmlFor="Filtre_a_eau-native-helper">Filtre_a_eau</InputLabel>
        <NativeSelect
          value={val.Filtre_a_eau}
          onChange={Change}
          name="Filtre_a_eau"
          className={classe.selectEmpty}
          inputProps={{ 'aria-label': 'Filtre_a_eau' }}
        >
          <option aria-label="None" value="" />
          <option style={{color:'black'}} value='Optimax Brita' name='Optimax Brita'>Optimax Brita</option>
          <option style={{color:'black'}} value='FillEnjoy' name='FillEnjoy'>Fill Enjoy</option>
          <option style={{color:'black'}} value='Rhodesy' name='Rhodesy'>Rhodesy</option>
          <option style={{color:'black'}} value='others' name='others'>others</option>
        </NativeSelect>
        
      </FormControl>
     <FormControl className={classe.formControl}>
     <TextField
              required
              id="Nb"
              name="Nb"
              label="Nombres"
              style={{width:'100px'}}
              pattern='([0-9]{0,50})*'
              autoComplete="given-name"
              value={val.NFiltre_a_eau}
              onChange={Change}
            />

     </FormControl>
     <FormControl className={classe.formControl}>
        <InputLabel htmlFor="Thermostat-native-simple">Thermostat</InputLabel>
        <Select
          native
          value={val.Thermostat}
          onChange={Change}
          inputProps={{
            name: 'Thermostat',
            id: 'Thermostat-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option style={{color:'black'}} value='Thermostat-a' name='Thermostat-a'>Thermostat-a</option>
          <option style={{color:'black'}} value='Thermostat-b' name='Thermostat-b'>Thermostat-b</option>
          <option style={{color:'black'}} value='Thermostat-c' name='Thermostat-c'>Thermostat-c</option>
          <option style={{color:'black'}} value='others' name='others'>others</option>
        </Select>
      </FormControl>
      <FormControl className={classe.formControl}>
        <InputLabel htmlFor="Thermostat-native-simple">Compressuer</InputLabel>
        <Select
          native
          value={val.Compressuer}
          onChange={Change}
          inputProps={{
            name: 'Compressuer',
            id: 'Compressuer-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option style={{color:'black'}} value='Compressuer-a' name='Compressuer-a'>Compressuer-a</option>
          <option style={{color:'black'}} value='Compressuer-b' name='Compressuer-b'>Compressuer-b</option>
          <option style={{color:'black'}} value='Compressuer-c' name='Compressuer-c'>Compressuer-c</option>
          <option style={{color:'black'}} value='others' name='others'>others</option>
        </Select>
      </FormControl>
      <FormControl className={classe.formControl}>
        <InputLabel htmlFor="Thermostat-native-simple">Condenseur</InputLabel>
        <Select
          native
          value={val.Condenseur}
          onChange={Change}
          inputProps={{
            name: 'Condenseur',
            id: 'Condenseur-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option style={{color:'black'}} value='Condenseur-a' name='Condenseur-a'>Condenseur-a</option>
          <option style={{color:'black'}} value='Condenseur-b' name='Condenseur-b'>Condenseur-b</option>
          <option style={{color:'black'}} value='Condenseur-c' name='Condenseur-c'>Condenseur-c</option>
          <option style={{color:'black'}} value='others' name='others'>others</option>
        </Select>
      </FormControl>
      <FormControl className={classe.formControl}>
      <TextField
              required
              id="Nb_"
              name="Nb_"
              label="Nombres"
              style={{width:'100px'}}
              pattern='([0-9]{0,50})*'
              autoComplete="given-name"
              value={val.NCondenseur}
              onChange={Change}
            />
      </FormControl>
      
        
      
      
    </div>
    
          <h1 style={{color:'black'}}>Temps de travaille</h1>
          <form className={classes.container} noValidate>
      <TextField
        id="datetime-begin"
        label="begin"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
         
        }}
      />
      <TextField
        id="datetime-terminate"
        label="Terminate"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      
    </form>
         
          
        </Grid>
        <button onClick={Prestation}>next</button>
        </span>}
    
      </React.Fragment>
      <React.Fragment>
       
       
        {show&&<span>
          <h1 style={{color:'black'}}>Prestation</h1>
            <Grid container spacing={3}>
                 
                <Grid>
                <p><h4 style={{color:'black'}}>heures de travaille </h4></p>
                
               
                </Grid>
                <Grid item xs={12} >
          
          </Grid>
          <Grid item xs={12} >
          <TextareaAutosize
                style={{color:'black',
                        height:'90px',
                        width:'555px'}}
                rowsMax={10}
                aria-label="maximum height"
                placeholder="Avis Client"
                fullWidth
                name='avis_Client'
                value={val.avis_Client}
                onChange={Change}
                /> 
          </Grid>
          </Grid>
          </span>}
        </React.Fragment>
        <button  >terminate</button>
        
        </form>
      </React.Fragment>
    )
        }
