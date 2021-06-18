import React from 'react'
import './App.css';
import AdminHome from './components/admins/adminHome';
import Login from './components/loginsource/login';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import usersHome from './components/users/usersHome'
import Navbar from './components/admins/Navbar'
import Home from './components/admins/pages/Home';
import ListeUsers from './components/admins/pages/ListeUsers';
import FilesListe from './components/admins/pages/FilesListe';
import ClientsList from './components/admins/pages/ClientsList';
import FormUser from './components/admins/pages/FormUser';


function App() {
  return (
    <Router>
        {window.location.pathname !== '/' ? <Navbar /> : null}
        <Switch>
            
            <Route exact path='/'  component={Login} />
            
            {/* <Route exact path='/admin'  component={AdminHome} /> */}
            <Route exact path='/admin'  component={Home} />
            <Route exact path='/AjouterUser' component={FormUser} />
            <Route exact path='/ListeUsers' component={ListeUsers} />
            <Route exact path='/FilesList' component={FilesListe} />
            <Route exact path='/ClientsList'   component={ClientsList} />
            <Route exact path='/users'  component={usersHome} />


        </Switch>
    </Router>
  );
}

export default App;
