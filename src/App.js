import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './components/login.jsx';
import Registration from './components/registration.jsx'
import ForgetPassword from './components/forgetPassword.jsx'
import ResetPassword from './components/resetPassword'
import Dashboard from './components/dashboard/dashboard.jsx'
import card from './components/dashboard/newNote'
import GetAllNotes from './components/dashboard/getAllNotes'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login}></Route>
      <Route path="/signin" component={Login}></Route>
      <Route path="/forgetPassword" component={ForgetPassword} ></Route>
      <Route path='/resetpassword/:token'  component={ResetPassword}></Route>
      <Route path='/registration' component={Registration}></Route>     
      <Route path='/dashboard' component={Dashboard}></Route>
      <Route path="/note" component={card} />
      <Route path="/dashboard/notes" component={GetAllNotes} />
    </Router>
  );
}

export default App;