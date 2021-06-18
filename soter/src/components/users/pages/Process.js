import React, { Component } from 'react'
import FormClientDetails from './FormClientDetails'

export default class Process extends Component {
    state ={
        step:1,
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
        Compteur_Horaire_Groupe:''
    }
    nextStep =()=>{
        const {step} = this.state;
        this.setState({
            step : step + 1
        })
    }
    prevStep =()=>{
        const {step} = this.state;
        this.setState({
            step : step - 1
        })
    }
    handleChange = input => e =>{
        this.setState({[input]:e.target.value})
    }
    render() {
        const {step} =this.state
        const {Nom_client,Marque_et_Type_du_Véhicule,Tél_client,Immatriculation,Proprieter_du_véhicule,Compteur_KM_Véhicule,Tél_Proprieter,Model_du_Groupe,Lieu_intervention,N_Série,Compteur_Horaire_Groupe} = this.state
        const values = {Nom_client,Marque_et_Type_du_Véhicule,Tél_client,Immatriculation,Proprieter_du_véhicule,Compteur_KM_Véhicule,Tél_Proprieter,Model_du_Groupe,Lieu_intervention,N_Série,Compteur_Horaire_Groupe}
        switch (step){
            case 1 :
                return(
                    <FormClientDetails
                        nextStep ={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
                case 2 :
                    return( 
                        <h1>Demande d'intervention</h1>
                    )
        }
    }
}
