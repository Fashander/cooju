import React, {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
 } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import './App.css';
import HeaderBar from './components/UI/Header/NewHeader';
import Landing from './components/Pages/Landing';
import Profile from './components/Pages/Profile';
import Footer from './components/UI/Footer/Footer';
// import { withAuthentication } from './components/Session';
// import SignInPage, { SignInForm } from './components/Pages/Auth/signIn';
// import SignOutButton from './components/Pages/Auth/signOut';

// const DemoAler = "<div><h2>DEMO SITE</h2><p>This is a demo site created by <strong> Weixel Tech Team</strong> for <br/>College of Education, Oju.</p><p>for full production contact: <a href='tel:+234-803-667-6535'>+234 803 667 6535</a> now!</p></div>";
const DemoAlert = "DEMO SITE \nHi \nThis is a demo site created by Weixel Tech Team for \nCollege of Education, Oju.\nfor full production pls contact: +234 803 667 6535 ";

const App = () => {
  const [sendAlert, setSendAlert] = useState(()=>{
    return localStorage.getItem('wxn');
  })
  const [exp, setExp] = useState(localStorage.getItem('exp'));

  useEffect(() => {
    document.title = "Colledge of Education, Oju";
  }, [])

  useEffect(() => {
    demoAlerter();
  }, [])

  const demoAlerter = () => {
    if(!sendAlert || sendAlert===null){
      setTimeout(() => {
        alert(DemoAlert);
      }, 5000);
      localStorage.setItem('wxn','true');
      const nextExp = new Date();
      nextExp.setDate(nextExp.getDate() + 1);
      localStorage.setItem('exp',`${nextExp}`);
      
    }else {
      if(new Date(exp) < new Date()) {
        localStorage.removeItem('wxn');
        localStorage.removeItem('exp');
      }
    }

  }



  return (
    <Router>
    <HeaderBar />
    <Switch>
      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route exact path={ROUTES.PROFILE} component={Profile} />
      {/* <Route exact path={ROUTES.SIGN_IN} component={SignInPage} /> */}
    </Switch>
    <Footer />
  </Router>
  )
}

export default App