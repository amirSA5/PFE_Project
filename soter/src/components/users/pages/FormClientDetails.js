import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Review from './Review';
import Demande from './Demande';
import Ordre from './Ordre';
import Prestation from './Prestation';
import Navbarusers from '../Navbarusers'
import ProcessDetails from './ProcessDetails';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = [ 'demande intervention ', 'ordre de mession', 'prestation','Review'];


const GetStepContent=(step) =>{
    const [val,setVal] = useState({
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
      travaille:'null',
      Descriptif_du_problème:'',
      traveaux_demandé:'',
      Observations_complémentaires:'',
      Garentie:'',
      Nom_Technicien:'',
      Diagnostique:'',
      travaille_a_realisé:'',
      Moteur:'',
      Compteur:'',
      Filtre_a_eau:'',
      Thermostat:'',
      Compressuer:'',
      Condenseur:'',
      begin:'',
      Terminate:'',
      avis_Client:'',
    })
    const handleChange = input => e =>{
      setVal({[input]: e.target.value})
      e.preventDefault()
  }
  switch (step) {
    case 0:
      return <Demande 
            
            
              />;
              
    case 1:
      return <Ordre
               values={val}
               onChange={value=>setVal(value)}
                 />;
    case 2:
      return <Prestation 
              values={val}
              onChange={value=>setVal(value)}
              />;
    case 3: return <Review values={val} />

 
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  

  

  return (
    <React.Fragment>
      <Navbarusers />
      <CssBaseline />
      
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center" style={{color:'black'}}>
            Process
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                </Typography>
                <Typography variant="subtitle1">
                  
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {GetStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button} style={{backgroundColor:'red'}}>
                      Back
                    </Button>
                  )}
                  
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}