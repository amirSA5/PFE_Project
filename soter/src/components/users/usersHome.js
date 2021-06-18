import React from 'react'
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './usersHome.css'
import Home from './pages/Home'
import FilesList from './pages/FilesList'
import ClientsList from './pages/ClientsList'
import Navbarusers from './Navbarusers'
import FormClient from './pages/FormClient';
import Process from './pages/Process';

export default function UsersHome() {
    return (
    <Router>
      <Navbarusers />
   
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/AddClient' exact component={FormClient} />
        <Route path='/FilesList' exact component={FilesList} />
        <Route path='/ListeClients' exact component={ClientsList} />
        <Route path='/Process' exact component={Process} />
        
        
      </Switch>
    </Router>
    )
}
