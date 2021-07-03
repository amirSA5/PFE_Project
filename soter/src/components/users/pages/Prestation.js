import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import SelectItems from './SelectItems'
import Compteur from './Compteur';
import axios from 'axios'


import TextareaAutosize from '@material-ui/core/TextareaAutosize'

export default function Prestation(values) {
    console.log(values)

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                 
                <Grid>
                <h1 style={{color:'black'}}>heures de travaille </h1>
                
                <input type='text'  value={values.Nom_Technicien} onChange={e=>values.onChange(e.target.value)} />
                </Grid>
                <Grid item xs={12} >
          <TextareaAutosize
                style={{color:'black',
                        height:'90px',
                        width:'555px'}}
                rowsMax={10}
                aria-label="maximum height"
                placeholder="travaille realisé"
                fullWidth
                value={values.travaille_a_realisé}
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
                placeholder="Avis Client"
                fullWidth
                value={values.avis_Client}
                onChange={e=>values.onChange(e.target.value)}
                /> 
          </Grid>
          </Grid>

        </React.Fragment>
    )
}
