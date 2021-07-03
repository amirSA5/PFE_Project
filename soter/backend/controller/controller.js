const SoterDataCopy = require('../models/admin_model')


exports.post =(request,response) =>{
    const Sdata = new SoterDataCopy({
        Username_Admin: request.body.Username_Admin,
        mdp: request.body.mdp,
        FirstName: request.body.FirstName,
        LastName: request.body.LastName,
        Cin: request.body.Cin,
        Phone_Number: request.body.Phone_Number,
        Email: request.body.Email,
        Occupation: request.body.Occupation,
        Password: request.body.Password,
        Nom_client: request.body.Nom_client,
        Marque_et_Type_du_Véhicule: request.body.Marque_et_Type_du_Véhicule,
        Tél_client: request.body.Tél_client,
        Immatriculation: request.body.Immatriculation,
        Proprieter_du_véhicule: request.body.Proprieter_du_véhicule,
        Compteur_KM_Véhicule: request.body.Compteur_KM_Véhicule,
        Tél_Proprieter: request.body.Tél_Proprieter,
        Model_du_Groupe: request.body.Model_du_Groupe,
        Lieu_intervention: request.body.Lieu_intervention,
        N_Série: request.body.N_Série,
        Compteur_Horaire_Groupe: request.body.Compteur_Horaire_Groupe,
        Descriptif_du_problème: request.body.Descriptif_du_problème,
        traveaux_demandé: request.body.traveaux_demandé,
        Observations_complémentaires: request.body.Observations_complémentaires,
        Garentie: request.body.Garentie,
        Nom_Technicien: request.body.Nom_Technicien,
        Diagnostique: request.body.Diagnostique,
        travaille_a_realisé: request.body.travaille_a_realisé,
        Moteur: request.body.Moteur,
        Compteur: request.body.Compteur,
        Filtre_a_eau: request.body.Filtre_a_eau,
        NFiltre_a_eau: request.body.NFiltre_a_eau,
        Thermostat: request.body.Thermostat,
        Compressuer: request.body.Compressuer,
        Condenseur: request.body.Condenseur,
        NCondenseur: request.body.NCondenseur,
        begin: request.body.begin,
        Terminate: request.body.Terminate,
        avis_Client: request.body.avis_Client,
    })
    Sdata.save()
    .then(data=>{
        response.json(data)
        
    })
    .catch(error =>{
        response.json(error)
    })
}

exports.delete  = (request,response) =>{
    
    const id = request.params.id
    SoterDataCopy.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                response.status(404).send({message : `Cannot delete client with ${id}.Maybe id is wrong`})
            }else{
                response.send({
                    message : 'client was deleted successfully'
                })
            }
        })
        .catch(err=>{
            response.status(500).send({message : `error delete Client information with id=`+id})
        })
       
}
exports.update  = (request,response) =>{
    if(!request.body){
        return response
    }
    const id = request.params.id
    SoterDataCopy.findByIdAndUpdate(id, request.body, {useFindAndModify:false})
        .then(data =>{
            if(!data){
                response.status(404).send({message : `Cannot update client with ${id}.Maybe Client not found`})
            }else{
                response.send(data)
            }
        })
        .catch(err=>{
            response.status(500).send({message : `error update Client information`})
        })

}

