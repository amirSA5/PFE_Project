export default function validInfo(val){
    let errors={}

    //Nom client
    if(!val.FirstName.trim()){
        errors.FirstName = 'FirstName required'
    }

     //Nom client
     if(!val.LastName.trim()){
        errors.LastName = 'LastName required'
    }

    //tél client
    if(!val.Cin.trim()){
        errors.Cin = 'Cin required'
    }

    //tél client
    if(!val.Phone_Number.trim()){
        errors.Phone_Number = 'Phone_Number required'
    }
    //Proprieter du véhicule
    if(!val.Occupation.trim()){
        errors.Occupation = 'Occupation required'
    }
    //Proprieter du véhicule
    if(!val.Password.trim()){
        errors.Password = 'Password required'
    }
   



    return errors;

}