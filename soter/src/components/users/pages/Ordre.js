import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import SelectItems from './SelectItems'
import Compteur from './Compteur';

import TextareaAutosize from '@material-ui/core/TextareaAutosize'
export default function Ordre(values) {
  console.log(values)
    return (
        <React.Fragment>
        <Typography variant="h6" gutterBottom style={{color:'black'}}>
          
        </Typography>
        <Grid container spacing={3}>
          
          
          <Grid item xs={12}  >
            <TextareaAutosize
                style={{color:'black',
                        height:'90px',
                        width:'555px'}}
                rowsMax={10}
                aria-label="maximum height"
                placeholder="Diagnostique"
                fullWidth
                value={values.Diagnostique}
                onChange={e=>values.onChange(e.target.value)}

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
                fullWidth
                value={values.travaille_a_realisé}
                onChange={e=>values.onChange(e.target.value)}

                /> 
          </Grid>
          <SelectItems />
          <h1 style={{color:'black'}}>Temps de travaille</h1>
          <Compteur />
         
          
        </Grid>
      </React.Fragment>
    )

}
