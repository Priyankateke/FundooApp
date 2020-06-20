import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Login from './components/login.jsx';
import RegistrationForm from './components/registrationForm.jsx'
import ForgetPassword from './components/forgetPassword.jsx'
import ResetPassword from './components/resetPassword'


function App() {
  return (
    <Router>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/signin" component={Login}></Route>
      <Route path="/forgetPassword" component={ForgetPassword} ></Route>
      <Route exact path='/resetPassword' component={ResetPassword}></Route>
      <Route exact path='/registrationForm' component={RegistrationForm}></Route>
    </Router>
  );
}

export default App;
