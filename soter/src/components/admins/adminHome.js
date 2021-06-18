import React from 'react'
import './admineHome.css'
import Navbar from './Navbar'
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import ListeUsers from './pages/ListeUsers';
import FilesListe from './pages/FilesListe';
import ClientsList from './pages/ClientsList';
import FormUser from './pages/FormUser';

export default function AdminHome() {
    return (
    <Router>
      <Navbar />
   
      <Switch>
        <Route path='/admin' exact component={Home} />
        <Route path='/AjouterUser' exact component={FormUser} />
        <Route path='/ListeUsers' exact component={ListeUsers} />
        <Route path='/FilesList' exact component={FilesListe} />
        <Route path='/ClientsList' exact component={ClientsList} />
        
        
      </Switch>
    </Router>
    )
}

