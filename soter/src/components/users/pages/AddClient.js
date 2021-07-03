import React ,{useState} from 'react'
import axios from 'axios'
import './AddClient.css'
export default function AddClient () {
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
        Nom_client:'',
        Marque_et_Type_du_Véhicule:'',
        Tél_client:'',
        Immatriculation:'',
        Proprieter_du_véhicule:'',
        Compteur_KM_Véhicule:'',
        Tél_Proprieter:'',
        Model_du_Groupe:'',
        Lieu_intervention:'',
        N_Série:'',
        Compteur_Horaire_Groupe:'',
        Descriptif_du_problème:'null',
        traveaux_demandé:'null',
        Observations_complémentaires:'null',
        Garentie:'null',
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
        avis_Client:'null',
    
     
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
    return (
        
             <div className='form-content-right'>
            
            <form className='form' onSubmit={Submit}>
                <h1>Get Started !!!!!! Create User account by filling out the information below.</h1>
                <div className='form-inputs'>
                    <label htmlFor='Nom_client' className='form-label'>
                    Nom client
                    </label>
                    <input id='Nom_client' type='text' pattern='[A-Za-z]{3,30}' name='Nom_client' className='form-input' placeholder='Entre le nom client' value={val.Nom_client} onChange={Change} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='Tél_client' className='form-label'>
                    Téléphone du client
                    </label>
                    <input id='Tél_client' type='text' pattern='^(2|3|4|5|7|9)[0-9]{7}' name='Tél_client' className='form-input' placeholder='Entre le Numero de Téléphone du client' value={val.Tél_client} onChange={Change} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='Proprieter_du_véhicule' className='form-label'>
                    Proprieter du véhicule
                    </label>
                    <input id='Proprieter_du_véhicule' pattern='[A-Za-z]{3,30}' type='text' name='Proprieter_du_véhicule' className='form-input' placeholder='entre le Proprieter du véhicule' value={val.Proprieter_du_véhicule} onChange={Change} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='Tél_Proprieter' className='form-label'>
                    Téléphone du Proprieter                    </label>
                    <input id='Tél_Proprieter' type='text' pattern='^(2|3|4|5|7|9)[0-9]{7}' name='Tél_Proprieter' className='form-input' placeholder='Entre le Numero de Téléphone duProprieter' value={val.Tél_Proprieter} onChange={Change} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='Lieu_intervention' className='form-label'>
                    Lieu intervention
                    </label>
                    <input id='Lieu_intervention' type='text' pattern='[A-Za-z]{3,30}' name='Lieu_intervention' className='form-input' placeholder='Entre le Lieu intervention' value={val.Lieu_intervention} onChange={Change} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='Marque_et_Type_du_Véhicule' className='form-label'>
                    Marque et Type du Véhicule
                    </label>
                    <input id='Marque_et_Type_du_Véhicule' pattern='[A-Za-z]{3,30}' type='text' name='Marque_et_Type_du_Véhicule' className='form-input' placeholder='Enter your Marque_et_Type_du_Véhicule' value={val.Marque_et_Type_du_Véhicule} onChange={Change} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='Immatriculation' className='form-label'>
                    Immatriculation
                    </label>
                    <input id='Immatriculation' type='text' pattern='[0-9]{2,3}tunis[0-9]{1,9}' name='Immatriculation' className='form-input' placeholder='Enter your Immatriculation' value={val.Immatriculation} onChange={Change} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='Compteur_KM_Véhicule'  className='form-label'>
                    Compteur KM Véhicule
                    </label>
                    <input id='Compteur_KM_Véhicule' type='text' pattern='[0-9]{0,15}' name='Compteur_KM_Véhicule' className='form-input' placeholder='Enter your Compteur KM Véhicule' value={val.Compteur_KM_Véhicule} onChange={Change} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='Model_du_Groupe' className='form-label'>
                    Model du Groupe
                    </label>
                    <input id='Model_du_Groupe' type='text' pattern='S|s|D|d' name='Model_du_Groupe' className='form-input' placeholder='Enter your Model_du_Groupe' value={val.Model_du_Groupe} onChange={Change} />
                </div>
                <div className='form-inputs'>
                    <label htmlFor='N_Série' className='form-label'>
                    Numero de Série
                    </label>
                    <input id='N_Série' type='text' pattern='[0-9]{0,15}' name='N_Série' className='form-input' placeholder='Enter your N_Série' value={val.N_Série} onChange={Change} />
                </div>
                    <div className='form-inputs'>
                    <label htmlFor='Compteur_Horaire_Groupe' className='form-label'>
                    Compteur Horaire Groupe
                    </label>
                    <input id='Compteur_Horaire_Groupe' pattern='[0-9]{0,15}' type='text' name='Compteur_Horaire_Groupe' className='form-input' placeholder='Enter your Compteur_Horaire_Groupe' value={val.Compteur_Horaire_Groupe} onChange={Change} />
               
                </div>
                
                
                <button className='form-input-btn' type='submit' >Create</button>
               
                
            </form>    
        </div>
        
    
    )
}
