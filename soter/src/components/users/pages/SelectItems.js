import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NativeSelects() {
  const classes = useStyles();
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

  return (
    <div>
      <h2 style={{color:'black'}}>Materielle :</h2>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="Moteur-native-simple">Moteur</InputLabel>
        <Select
          native
          value={state.Moteur}
          onChange={handleChange}
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
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="Compteur-native-helper">Compteur</InputLabel>
        <NativeSelect
          value={state.Compteur}
          onChange={handleChange}
          inputProps={{
            name: 'Compteur',
            id: 'Compteur-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option style={{color:'black'}} value='THL'>THL</option>
          <option style={{color:'black'}} value='Ati'>Ati</option>
          <option style={{color:'black'}} value='SLV'>SLV</option>
          <option style={{color:'black'}} value='others' name='others'>others</option>
        </NativeSelect>
        
      </FormControl>
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="Filtre_a_eau-native-helper">Filtre_a_eau</InputLabel>
        <NativeSelect
          value={state.Filtre_a_eau}
          onChange={handleChange}
          name="Filtre_a_eau"
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Filtre_a_eau' }}
        >
          <option aria-label="None" value="" />
          <option style={{color:'black'}} value='Optimax Brita'>Optimax Brita</option>
          <option style={{color:'black'}} value='FillEnjoy'>Fill Enjoy</option>
          <option style={{color:'black'}} value='Rhodesy'>Rhodesy</option>
          <option style={{color:'black'}} value='others' name='others'>others</option>
        </NativeSelect>
        
      </FormControl>
     <FormControl className={classes.formControl}>
     <TextField
              required
              id="Nb"
              name="Nb"
              label="Nombres"
              style={{width:'100px'}}
              pattern='([0-9]{0,50})*'
              autoComplete="given-name"
            />

     </FormControl>
     <FormControl className={classes.formControl}>
        <InputLabel htmlFor="Thermostat-native-simple">Thermostat</InputLabel>
        <Select
          native
          value={state.Thermostat}
          onChange={handleChange}
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
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="Thermostat-native-simple">Compressuer</InputLabel>
        <Select
          native
          value={state.Compressuer}
          onChange={handleChange}
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
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="Thermostat-native-simple">Condenseur</InputLabel>
        <Select
          native
          value={state.Condenseur}
          onChange={handleChange}
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
      <FormControl className={classes.formControl}>
      <TextField
              required
              id="Nb_"
              name="Nb_"
              label="Nombres"
              style={{width:'100px'}}
              pattern='([0-9]{0,50})*'
              autoComplete="given-name"
            />
      </FormControl>
      
        
      
      
    </div>
  );
}