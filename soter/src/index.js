import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import AdminHome from './components/admins/adminHome';
import FormUser from './components/admins/pages/FormUser';
import AddClient from './components/users/pages/AddClient';
import FormClient from './components/users/pages/FormClient';
import Process from './components/users/pages/Process';
import UsersHome from './components/users/usersHome';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


