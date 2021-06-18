import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import TextareaAutosize from '@material-ui/core/TextareaAutosize'
export default function Ordre() {
    return (
        <React.Fragment>
        <Typography variant="h6" gutterBottom style={{color:'black'}}>
          
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <TextField
              required
              id="N_Série"
              name="N_Série"
              label="N_Série"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          
          <Grid item xs={12}  >
            <TextareaAutosize
                style={{color:'black',
                        height:'90px',
                        width:'555px'}}
                rowsMax={10}
                aria-label="maximum height"
                placeholder="Diagnostique"
                fullWidth

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

                /> 
          </Grid>
         
          
        </Grid>
      </React.Fragment>
    )

}
