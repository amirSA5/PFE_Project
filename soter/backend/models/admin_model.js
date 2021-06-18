const mongoose = require('mongoose');


const SoterData = new mongoose.Schema({
    Username_Admin:{
        type:String,
        required:true
    },
    mdp:{
        type:String,
        required:true
    },
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    Cin:{
        type:String,
        required:true
    },
    Phone_Number:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Occupation:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Nom_client:{
        type:String,
        required:true
    },
    Marque_et_Type_du_Véhicule:{
        type:String,
        required:true
    },
    Tél_client:{
        type:String,
        required:true
    },
    Immatriculation:{
        type:String,
        required:true
    },
    Proprieter_du_véhicule:{
        type:String,
        required:true
    },
    Compteur_KM_Véhicule:{
        type:String,
        required:true
    },
    Tél_Proprieter:{
        type:String,
        required:true
    },
    Model_du_Groupe:{
        type:String,
        required:true
    },
    Lieu_intervention:{
        type:String,
        required:true
    },
    N_Série:{
        type:String,
        required:true
    },
    Compteur_Horaire_Groupe:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }

})


    





module.exports = mongoose.model('Soter_Data',SoterData)